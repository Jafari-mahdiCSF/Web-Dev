import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';
@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  albumId: number = 0;
  loading = true;
  error = '';
  selectedPhoto: Photo | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.albumId = +params['id'];
      if (this.albumId) {
        this.fetchPhotos(this.albumId);
      }
    });
  }
  fetchPhotos(id: number): void {
    this.loading = true;
    this.albumService.getAlbumPhotos(id).subscribe({
      next: (data) => {
        // Use the API data but replace the URLs with Picsum images
        this.photos = data.map((photo, index) => ({
          ...photo,
          thumbnailUrl: `https://picsum.photos/seed/album-${id}-photo-${index + 1}/300/300`,
          url: `https://picsum.photos/seed/album-${id}-photo-${index + 1}/800/600`
        }));
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load photos. Please try again.';
        this.loading = false;
        console.error('Error fetching photos:', err);
      }
    });
  }
  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }

  openPhoto(photo: Photo): void {
    this.selectedPhoto = photo;
  }

  closePhoto(): void {
    this.selectedPhoto = null;
  }
}
