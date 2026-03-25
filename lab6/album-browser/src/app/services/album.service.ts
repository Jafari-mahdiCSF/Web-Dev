import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  // Local fallback data if API is blocked/unreachable.
  private fallbackAlbums: Album[] = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    userId: (i % 5) + 1,
    title: `Sample Album ${i + 1}`
  }));

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}/albums`).pipe(
      timeout(3000),
      catchError((err) => {
        console.warn('Albums API unavailable, using fallback albums:', err);
        return of(this.fallbackAlbums);
      })
    );
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.apiUrl}/albums/${id}`).pipe(
      timeout(3000),
      catchError((err) => {
        console.warn(`Album ${id} API unavailable, using fallback album:`, err);
        const found = this.fallbackAlbums.find((a) => a.id === id);
        return of(found ?? { id, userId: 1, title: `Sample Album ${id}` });
      })
    );
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.apiUrl}/albums/${id}/photos`).pipe(
      timeout(3000),
      catchError((err) => {
        console.warn(`Photos API unavailable for album ${id}, using fallback photos:`, err);
        return of(this.generateFallbackPhotos(id, 24));
      })
    );
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.apiUrl}/albums/${album.id}`, album).pipe(
      timeout(3000),
      catchError((err) => {
        console.warn('Update API unavailable, simulating local update:', err);
        return of(album);
      })
    );
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/albums/${id}`).pipe(
      timeout(3000),
      catchError((err) => {
        console.warn(`Delete API unavailable for album ${id}, simulating success:`, err);
        return of(void 0);
      })
    );
  }

  private generateFallbackPhotos(albumId: number, count: number): Photo[] {
    return Array.from({ length: count }, (_, i) => {
      const photoId = albumId * 1000 + i + 1;
      return {
        id: photoId,
        albumId,
        title: `Sample Photo ${i + 1}`,
        thumbnailUrl: `https://picsum.photos/seed/album-${albumId}-photo-${i + 1}/300/300`,
        url: `https://picsum.photos/seed/album-${albumId}-photo-${i + 1}/1000/700`
      };
    });
  }
}
