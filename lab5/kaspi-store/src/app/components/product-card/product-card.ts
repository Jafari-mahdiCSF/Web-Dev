import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input.required<Product>();

  like = output<number>();
  delete = output<number>();
  share = output<{type: string, product: Product}>();
  favorite = output<number>();

  showShareMenu = false;

  // For star rating
  get fullStars(): number[] {
    return Array(Math.floor(this.product().rating)).fill(0);
  }

  get hasHalfStar(): boolean {
    return this.product().rating % 1 >= 0.5;
  }

  get emptyStars(): number[] {
    const totalStars = 5;
    const filledStars = Math.floor(this.product().rating);
    const halfStar = this.hasHalfStar ? 1 : 0;
    return Array(totalStars - filledStars - halfStar).fill(0);
  }

  onLike(): void {
    this.like.emit(this.product().id);
  }

  onToggleFavorite(): void {
    this.favorite.emit(this.product().id);
  }

  onDelete(): void {
    if (confirm('Are you sure you want to delete this item?')) {
      this.delete.emit(this.product().id);
    }
  }

  toggleShareMenu(): void {
    this.showShareMenu = !this.showShareMenu;
  }

  openProduct(): void {
    window.open(this.product().link, '_blank');
  }

  shareOnWhatsApp() {
    this.showShareMenu = false;
    this.share.emit({ type: 'whatsapp', product: this.product() });
  }

  shareOnTelegram() {
    this.showShareMenu = false;
    this.share.emit({ type: 'telegram', product: this.product() });
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'https://via.placeholder.com/400x400/f0f0f0/666666?text=No+Image';
  }
}
