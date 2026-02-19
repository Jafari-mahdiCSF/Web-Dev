import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: Product;

  // For star rating
  get fullStars(): number[] {
    return Array(Math.floor(this.product.rating)).fill(0);
  }

  get hasHalfStar(): boolean {
    return this.product.rating % 1 >= 0.5;
  }

  get emptyStars(): number[] {
    const totalStars = 5;
    const filledStars = Math.floor(this.product.rating);
    const halfStar = this.hasHalfStar ? 1 : 0;
    return Array(totalStars - filledStars - halfStar).fill(0);
  }

  shareOnWhatsApp() {
    const text = `Check out this product: ${this.product.name}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text + ' - ' + this.product.link)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }
}
