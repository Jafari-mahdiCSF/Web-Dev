import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Photo } from '../models/photo';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="photos-container">
      <h1>Photos for Album {{ albumId }}</h1>
      @if (loading) {
        <p>Loading photos...</p>
      } @else {
        <div class="photos-grid">
          @for (photo of photos; track photo.id) {
            <div class="photo-item">
              <img [src]="photo.thumbnailUrl" [alt]="photo.title" class="thumbnail">
              <p class="photo-title">{{ photo.title }}</p>
            </div>
          }
        </div>
        <a [routerLink]="['/albums', albumId]" class="back-btn">Back to Album</a>
      }
    </div>
  `,
  styles: [`
    .photos-container {
      padding: 2rem;
    }
    .photos-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }
    .photo-item {
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 0.5rem;
      text-align: center;
    }
    .thumbnail {
      width: 100%;
      height: auto;
      border-radius: 4px;
    }
    .photo-title {
      margin-top: 0.5rem;
      font-size: 0.9rem;
      word-break: break-word;
    }
    .back-btn {
      display: inline-block;
      padding: 0.5rem 1rem;
      background-color: #6c757d;
      color: white;
      text-decoration: none;
      border-radius: 4px;
    }
    .back-btn:hover {
      background-color: #5a6268;
    }
  `]
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  albumId = 0;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) { }

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching photos:', error);
        this.loading = false;
      }
    });
  }
}
