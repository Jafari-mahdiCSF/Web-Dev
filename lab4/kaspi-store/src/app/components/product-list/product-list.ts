import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products = input<Product[]>([]);
  categoryName = input<string>('');

  deleteProduct = output<number>();
  likeProduct = output<number>();
  shareProduct = output<{type: string, product: Product}>();

  onDelete(productId: number): void {
    this.deleteProduct.emit(productId);
  }

  onLike(productId: number): void {
    this.likeProduct.emit(productId);
  }

  onShare(event: {type: string, product: Product}): void {
    this.shareProduct.emit(event);
  }
}
