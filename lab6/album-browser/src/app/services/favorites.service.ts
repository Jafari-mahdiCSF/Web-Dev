import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private readonly STORAGE_KEY = 'album-favorites';
  private favoritesSubject: BehaviorSubject<Set<number>>;
  public favorites$: Observable<Set<number>>;
  public favoritesCount$: Observable<number>;
  private platformId = inject(PLATFORM_ID);
  private isBrowser: boolean;

  constructor() {
    this.isBrowser = isPlatformBrowser(this.platformId);

    // Load favorites from localStorage on initialization (only in browser)
    const stored = this.isBrowser ? localStorage.getItem(this.STORAGE_KEY) : null;
    const initialFavorites = stored ? new Set<number>(JSON.parse(stored)) : new Set<number>();
    this.favoritesSubject = new BehaviorSubject<Set<number>>(initialFavorites);
    this.favorites$ = this.favoritesSubject.asObservable();

    // Create observable for count
    this.favoritesCount$ = this.favorites$.pipe(
      map(favorites => favorites.size)
    );
  }

  /**
   * Toggle favorite status for an album
   */
  toggleFavorite(albumId: number): void {
    const currentFavorites = new Set(this.favoritesSubject.value);

    if (currentFavorites.has(albumId)) {
      currentFavorites.delete(albumId);
    } else {
      currentFavorites.add(albumId);
    }

    this.updateFavorites(currentFavorites);
  }

  /**
   * Check if an album is favorited
   */
  isFavorite(albumId: number): boolean {
    return this.favoritesSubject.value.has(albumId);
  }

  /**
   * Get all favorite album IDs
   */
  getFavorites(): Set<number> {
    return new Set(this.favoritesSubject.value);
  }

  /**
   * Get count of favorites
   */
  getFavoritesCount(): number {
    return this.favoritesSubject.value.size;
  }

  /**
   * Update favorites and persist to localStorage
   */
  private updateFavorites(favorites: Set<number>): void {
    this.favoritesSubject.next(favorites);
    // Only save to localStorage if in browser
    if (this.isBrowser) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(Array.from(favorites)));
    }
  }

  /**
   * Clear all favorites
   */
  clearAllFavorites(): void {
    this.updateFavorites(new Set<number>());
  }
}

