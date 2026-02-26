import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  private products: Product[] = [
    // Smartphones (categoryId: 1)
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      description: 'Apple A17 Pro chip, 6.7" Super Retina XDR display, 48MP camera',
      price: 649990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848198174.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848198174.png',
        'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848198174.png',
        'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848198174.png'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-sinii-113138420/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      description: 'Snapdragon 8 Gen 3, 6.8" Dynamic AMOLED 2X, 200MP camera',
      price: 549990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h81/h0a/84963252699166.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h81/h0a/84963252699166.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h81/h0a/84963252699166.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h81/h0a/84963252699166.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-256gb-chernyi-116043556/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 3,
      name: 'Google Pixel 8 Pro',
      description: 'Google Tensor G3, 6.7" LTPO OLED, 50MP camera with AI features',
      price: 449990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h63/84963253223454.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h63/84963253223454.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h63/84963253223454.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h63/84963253223454.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/google-pixel-8-pro-256gb-chernyi-114411182/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 4,
      name: 'Xiaomi 14 Ultra',
      description: 'Snapdragon 8 Gen 3, 6.73" LTPO AMOLED, Leica quad camera',
      price: 399990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h45/h51/85390116814878.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h45/h51/85390116814878.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h45/h51/85390116814878.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h45/h51/85390116814878.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-14-ultra-512gb-chernyi-117510403/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 5,
      name: 'OnePlus 12',
      description: 'Snapdragon 8 Gen 3, 6.82" LTPO AMOLED, 50MP triple camera',
      price: 379990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf0/h2d/84922129711134.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf0/h2d/84922129711134.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf0/h2d/84922129711134.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf0/h2d/84922129711134.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/oneplus-12-512gb-chernyi-115992307/',
      likes: 0,
      categoryId: 1
    },
    // Laptops (categoryId: 2)
    {
      id: 6,
      name: 'MacBook Pro 16',
      description: 'Apple M3 Pro chip, 16" Liquid Retina XDR, 18GB RAM',
      price: 1199990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h63/84907860918302.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h63/84907860918302.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h63/84907860918302.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h63/84907860918302.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-m3-pro-18-gb-ssd-512-gb-macos-145519560/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 7,
      name: 'ASUS ROG Zephyrus G14',
      description: 'AMD Ryzen 9, RTX 4060, 14" QHD, 16GB RAM',
      price: 899990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h67/h10/86352326508574.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h67/h10/86352326508574.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h67/h10/86352326508574.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h67/h10/86352326508574.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g14-ga403ui-16gb-1tb-ssd-120753759/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 8,
      name: 'Dell XPS 15',
      description: 'Intel Core i9, RTX 4060, 15.6" OLED, 32GB RAM',
      price: 999990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hdc/h5f/84907843944478.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hdc/h5f/84907843944478.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hdc/h5f/84907843944478.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hdc/h5f/84907843944478.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/dell-xps-15-9530-32gb-1tb-ssd-115888438/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 9,
      name: 'Lenovo Legion 5 Pro',
      description: 'AMD Ryzen 7, RTX 4060, 16" WQXGA, 16GB RAM',
      price: 749990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf9/hc6/85556875329566.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf9/hc6/85556875329566.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf9/hc6/85556875329566.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf9/hc6/85556875329566.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-legion-5-pro-16arx8-16gb-512gb-ssd-118401831/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 10,
      name: 'HP Spectre x360',
      description: 'Intel Core i7, 14" OLED touch, 16GB RAM, 1TB SSD',
      price: 699990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h25/haa/85630173380638.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h25/haa/85630173380638.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h25/haa/85630173380638.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h25/haa/85630173380638.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/hp-spectre-x360-14-eu0009ci-16gb-1tb-ssd-119812611/',
      likes: 0,
      categoryId: 2
    },
    // Headphones (categoryId: 3)
    {
      id: 11,
      name: 'Sony WH-1000XM5',
      description: 'Wireless noise cancelling, 30hr battery, LDAC support',
      price: 149990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7a/h07/64285376495646.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7a/h07/64285376495646.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h7a/h07/64285376495646.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h7a/h07/64285376495646.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105995922/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 12,
      name: 'Apple AirPods Max',
      description: 'Over-ear, active noise cancellation, spatial audio',
      price: 299990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb4/h03/64416981696542.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb4/h03/64416981696542.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hb4/h03/64416981696542.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hb4/h03/64416981696542.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-max-serebristyi-100956789/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 13,
      name: 'Bose QuietComfort Ultra',
      description: 'Premium noise cancelling, immersive audio, 24hr battery',
      price: 179990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc0/h33/84963341516830.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc0/h33/84963341516830.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hc0/h33/84963341516830.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hc0/h33/84963341516830.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/bose-quietcomfort-ultra-chernyi-115708310/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 14,
      name: 'Sennheiser Momentum 4',
      description: 'Wireless, adaptive noise cancellation, 60hr battery',
      price: 139990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7e/hfd/70010958938142.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7e/hfd/70010958938142.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h7e/hfd/70010958938142.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h7e/hfd/70010958938142.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/sennheiser-momentum-4-wireless-chernyi-108025673/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 15,
      name: 'JBL Tour One M2',
      description: 'Wireless, adaptive noise cancelling, 50hr battery',
      price: 89990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h23/hbb/85185544798238.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h23/hbb/85185544798238.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h23/hbb/85185544798238.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h23/hbb/85185544798238.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/jbl-tour-one-m2-chernyi-116225005/',
      likes: 0,
      categoryId: 3
    },
    // Tablets (categoryId: 4)
    {
      id: 16,
      name: 'iPad Pro 12.9',
      description: 'Apple M2 chip, 12.9" Liquid Retina XDR, 128GB',
      price: 549990,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1585790050230-5dd28404f647?w=500&h=500&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1585790050230-5dd28404f647?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&h=500&fit=crop'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-12-9-2022-wi-fi-128gb-seryi-106394251/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 17,
      name: 'Samsung Tab S9 Ultra',
      description: 'Snapdragon 8 Gen 2, 14.6" Super AMOLED, 256GB',
      price: 499990,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1585790050230-5dd28404f647?w=500&h=500&fit=crop'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-ultra-5g-256gb-grafitovyi-115289858/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 18,
      name: 'Xiaomi Pad 6',
      description: 'Snapdragon 870, 11" 144Hz display, 128GB',
      price: 169990,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&h=500&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1585790050230-5dd28404f647?w=500&h=500&fit=crop'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-8gb-128gb-sinii-114542834/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 19,
      name: 'Lenovo Tab P12',
      description: 'MediaTek Dimensity 7050, 12.7" 3K display, 256GB',
      price: 199990,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=500&h=500&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop'
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-tab-p12-8gb-256gb-seryi-116425767/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 20,
      name: 'Google Pixel Tablet',
      description: 'Tensor G2, 10.95" display, 128GB, with speaker dock',
      price: 299990,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=500&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1585790050230-5dd28404f647?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&h=500&fit=crop'
      ],
      link: 'https://kaspi.kz/shop/p/google-pixel-tablet-128gb-s-hazel-116028710/',
      likes: 0,
      categoryId: 4
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(product => product.categoryId === categoryId);
  }

  deleteProduct(productId: number): void {
    const index = this.products.findIndex(p => p.id === productId);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  likeProduct(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes++;
    }
  }
}


