import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from './components/product-list/product-list';
import { ProductCard } from './components/product-card/product-card';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ProductList, ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  categories: Category[] = [];
  selectedCategory: Category | null = null;
  products: Product[] = [];
  favorites: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.categories = this.productService.getCategories();
  }

  selectCategory(category: Category): void {
    this.selectedCategory = category;
    this.products = this.productService.getProductsByCategory(category.id);
  }

  toggleFavorite(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    product.isFavorite = !product.isFavorite;
    this.favorites = this.products.filter(p => p.isFavorite);
  }

  onDeleteProduct(productId: number): void {
    this.productService.deleteProduct(productId);
    if (this.selectedCategory) {
      this.products = this.productService.getProductsByCategory(this.selectedCategory.id);
    }
  }

  onLikeProduct(productId: number): void {
    this.productService.likeProduct(productId);
    if (this.selectedCategory) {
      // Update the products list to reflect the new like count
      this.products = this.productService.getProductsByCategory(this.selectedCategory.id);
    }
  }

  onShareProduct(event: {type: string, product: Product}): void {
    const product = event.product;
    const message = `Check out this product: ${product.name} - ${product.link}`;

    let url = '';
    if (event.type === 'whatsapp') {
      url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    } else if (event.type === 'telegram') {
      url = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(product.name)}`;
    }

    window.open(url, '_blank');
  }
}
