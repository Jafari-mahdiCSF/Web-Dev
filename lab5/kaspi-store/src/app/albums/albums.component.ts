import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="albums-container">
      <h1>Albums</h1>
      @if (loading) {
        <p>Loading albums...</p>
      } @else {
        <div class="albums-list">
          @for (album of albums; track album.id) {
            <div class="album-item">
              <a [routerLink]="['/albums', album.id]" class="album-link">
                {{ album.id }}. {{ album.title }}
              </a>
              <button (click)="deleteAlbum(album.id)" class="delete-btn">Delete</button>
            </div>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .albums-container {
      padding: 2rem;
    }
    .albums-list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .album-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    .album-link {
      flex: 1;
      text-decoration: none;
      color: #007bff;
    }
    .album-link:hover {
      text-decoration: underline;
    }
    .delete-btn {
      padding: 0.25rem 0.5rem;
      background-color: #dc3545;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .delete-btn:hover {
      background-color: #c82333;
    }
  `]
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching albums:', error);
        this.loading = false;
      }
    });
  }

  deleteAlbum(id: number): void {
    if (confirm('Are you sure you want to delete this album?')) {
      this.albumService.deleteAlbum(id).subscribe({
        next: () => {
          this.albums = this.albums.filter(album => album.id !== id);
        },
        error: (error) => {
          console.error('Error deleting album:', error);
        }
      });
    }
  }
}
