import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { FavoritesService } from '../../services/favorites.service';
import { Album } from '../../models/album.model';
import { Subscription } from 'rxjs';

// Angular Material imports
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatTooltipModule
  ],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit, OnDestroy {
  albums: Album[] = [];
  filteredAlbums: Album[] = [];
  loading = true;
  error = '';
  showOnlyFavorites = false;
  favoritesCount = 0;
  favorites = new Set<number>();
  private favoritesSubscription?: Subscription;

  constructor(
    private albumService: AlbumService,
    public favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.fetchAlbums();

    // Subscribe to favorites changes
    this.favoritesSubscription = this.favoritesService.favorites$.subscribe(favorites => {
      this.favorites = favorites;
      this.favoritesCount = favorites.size;
      this.applyFilter();
    });
  }

  ngOnDestroy(): void {
    this.favoritesSubscription?.unsubscribe();
  }

  fetchAlbums(): void {
    this.loading = true;
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.applyFilter();
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load albums. Please try again.';
        this.loading = false;
        console.error('Error fetching albums:', err);
      }
    });
  }

  applyFilter(): void {
    if (this.showOnlyFavorites) {
      this.filteredAlbums = this.albums.filter(album => this.favorites.has(album.id));
    } else {
      this.filteredAlbums = this.albums;
    }
  }


  toggleFavorite(albumId: number, event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.favoritesService.toggleFavorite(albumId);
  }

  isFavorite(albumId: number): boolean {
    return this.favorites.has(albumId);
  }

  getThumbnail(albumId: number): string {
    // Using Picsum Photos API for beautiful placeholder images
    // Each album gets a unique image based on its ID
    return `https://picsum.photos/seed/album-${albumId}/400/300`;
  }

  deleteAlbum(id: number, event: Event): void {
    event.stopPropagation();

    if (confirm('Are you sure you want to delete this album?')) {
      this.albumService.deleteAlbum(id).subscribe({
        next: () => {
          this.albums = this.albums.filter(album => album.id !== id);
          this.applyFilter();
        },
        error: (err) => {
          console.error('Error deleting album:', err);
          alert('Failed to delete album. Please try again.');
        }
      });
    }
  }

  getColor(id: number): string {
    const colors = [
      '92c952', 'ff5733', '33a8ff', 'ff33a8', 'a833ff',
      '33ff57', 'ffcc33', '33ffcc', 'c95292', '5733ff'
    ];
    return colors[id % colors.length];
  }
}

