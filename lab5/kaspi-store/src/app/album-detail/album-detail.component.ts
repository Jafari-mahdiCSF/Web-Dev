import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="detail-container">
      @if (loading) {
        <p>Loading album details...</p>
      } @else if (album) {
        <h1>Album {{ album.id }}</h1>
        <p><strong>User ID:</strong> {{ album.userId }}</p>
        <div class="form-group">
          <label for="title">Title:</label>
          <input id="title" [(ngModel)]="editedTitle" class="form-control">
        </div>
        <div class="button-group">
          <button (click)="save()" class="btn btn-primary">Save</button>
          <button (click)="goBack()" class="btn btn-secondary">Back to Albums</button>
          <a [routerLink]="['/albums', album.id, 'photos']" class="btn btn-info">View Photos</a>
        </div>
        @if (message) {
          <p class="message">{{ message }}</p>
        }
      } @else {
        <p>Album not found.</p>
      }
    </div>
  `,
  styles: [`
    .detail-container {
      padding: 2rem;
      max-width: 600px;
      margin: 0 auto;
    }
    .form-group {
      margin: 1rem 0;
    }
    .form-control {
      width: 100%;
      padding: 0.5rem;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    .button-group {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }
    .btn {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
      font-size: 1rem;
    }
    .btn-primary {
      background-color: #007bff;
      color: white;
    }
    .btn-secondary {
      background-color: #6c757d;
      color: white;
    }
    .btn-info {
      background-color: #17a2b8;
      color: white;
    }
    .message {
      margin-top: 1rem;
      padding: 0.5rem;
      background-color: #d4edda;
      color: #155724;
      border-radius: 4px;
    }
  `]
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editedTitle = '';
  loading = true;
  message = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editedTitle = data.title;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching album:', error);
        this.loading = false;
      }
    });
  }

  save(): void {
    if (!this.album) return;
    const updatedAlbum = { ...this.album, title: this.editedTitle };
    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: (data) => {
        this.album = data;
        this.message = 'Album updated successfully!';
        setTimeout(() => this.message = '', 3000);
      },
      error: (error) => {
        console.error('Error updating album:', error);
        this.message = 'Error updating album.';
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
