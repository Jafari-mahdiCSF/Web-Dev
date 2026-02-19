import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'kaspi-store';
}
