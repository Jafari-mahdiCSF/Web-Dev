import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { FavoritesService } from '../../services/favorites.service';
import { Album } from '../../models/album.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit, OnDestroy {
  album: Album | null = null;
  editedTitle = '';
  loading = true;
  error = '';
  saving = false;
  previewPhotos: number[] = [];
  isFavorite = false;
  private favoritesSubscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this.fetchAlbum(id);
        this.updateFavoriteState(id);
      }
    });

    // Subscribe to favorites changes
    this.favoritesSubscription = this.favoritesService.favorites$.subscribe(favorites => {
      if (this.album) {
        this.isFavorite = favorites.has(this.album.id);
      }
    });
  }

  ngOnDestroy(): void {
    this.favoritesSubscription?.unsubscribe();
  }

  updateFavoriteState(albumId: number): void {
    this.isFavorite = this.favoritesService.isFavorite(albumId);
  }

  toggleFavorite(): void {
    if (this.album) {
      this.favoritesService.toggleFavorite(this.album.id);
    }
  }
  fetchAlbum(id: number): void {
    this.loading = true;
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editedTitle = data.title;
        this.loading = false;
        // Generate 6 preview photo indices
        this.previewPhotos = Array.from({ length: 6 }, (_, i) => i + 1);
      },
      error: (err) => {
        this.error = 'Failed to load album details.';
        this.loading = false;
        console.error('Error fetching album:', err);
      }
    });
  }

  getPhotoUrl(albumId: number, photoIndex: number): string {
    // Using Picsum Photos API for beautiful images
    return `https://picsum.photos/seed/album-${albumId}-photo-${photoIndex}/300/300`;
  }
  saveChanges(): void {
    if (!this.album || !this.editedTitle.trim()) return;
    this.saving = true;
    const updatedAlbum = { ...this.album, title: this.editedTitle };
    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: (data) => {
        this.album = data;
        this.saving = false;
      },
      error: (err) => {
        console.error('Error updating album:', err);
        alert('Failed to update album. Please try again.');
        this.saving = false;
      }
    });
  }
  goBack(): void {
    this.router.navigate(['/albums']);
  }
  viewPhotos(): void {
    if (this.album) {
      this.router.navigate(['/albums', this.album.id, 'photos']);
    }
  }
}
