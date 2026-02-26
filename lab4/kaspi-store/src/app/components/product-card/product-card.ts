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

  onDelete(): void {
    if (confirm('Are you sure you want to delete this item?')) {
      this.delete.emit(this.product().id);
    }
  }

  shareOnWhatsApp() {
    this.share.emit({ type: 'whatsapp', product: this.product() });
  }

  shareOnTelegram() {
    this.share.emit({ type: 'telegram', product: this.product() });
  }
}
