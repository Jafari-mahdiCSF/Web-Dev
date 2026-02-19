import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 15 Pro Max',
      description: 'Смартфон Apple iPhone 15 Pro Max, 256GB, натуральный титан. Самый мощный iPhone с инновационной камерой и титановым корпусом.',
      price: 698990,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1695048133300-1a29be3e7a1e?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1695048133458-bbf5c8c9ef07?w=400&h=400&fit=crop'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-113677788/?c=750000000'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      description: 'Смартфон Samsung Galaxy S24 Ultra, 512GB, титановый черный. Флагман с поддержкой S Pen и 200MP камерой.',
      price: 648990,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-512gb-116310358/?c=750000000'
    },
    {
      id: 3,
      name: 'MacBook Pro 16" M3 Pro',
      description: 'Ноутбук Apple MacBook Pro 16" M3 Pro, 18GB RAM, 512GB SSD, серый космос. Профессиональный ноутбук для работы и творчества.',
      price: 1198990,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-m3-pro-118309576/?c=750000000'
    },
    {
      id: 4,
      name: 'Sony PlayStation 5 Slim',
      description: 'Игровая приставка Sony PlayStation 5 Slim, 1TB, белая. Сверхбыстрый SSD и потрясающая графика для незабываемого гейминга.',
      price: 289990,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?w=400&h=400&fit=crop'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-1tb-119514107/?c=750000000'
    },
    {
      id: 5,
      name: 'Xiaomi Robot Vacuum S10+',
      description: 'Робот-пылесос Xiaomi Robot Vacuum S10+, белый. Лазерная навигация, мощностью 4000 Па, влажная уборка.',
      price: 129990,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1625241970880-6f7b0c58e5f2?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=400&fit=crop'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-s10-115781543/?c=750000000'
    },
    {
      id: 6,
      name: 'Apple AirPods Pro 2',
      description: 'Наушники Apple AirPods Pro 2, белый. Активное шумоподавление, пространственное аудио, беспроводная зарядка.',
      price: 119990,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1590658165737-15a047b7a1b4?w=400&h=400&fit=crop'
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-106362968/?c=750000000'
    },
    {
      id: 7,
      name: 'Samsung QLED 65" 4K',
      description: 'Телевизор Samsung QLED 65" 4K, черный. Quantum Dot технология, HDR, Smart TV, голосовое управление.',
      price: 499990,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1593359863503-f598a21e4a15?w=400&h=400&fit=crop'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-qe65q60cau-165-sm-65-2023-114557610/?c=750000000'
    },
    {
      id: 8,
      name: 'Canon EOS R6 Mark II',
      description: 'Фотоаппарат Canon EOS R6 Mark II, 24.2 МП, беззеркальный, черный. Профессиональная камера для фото и видео.',
      price: 899990,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1606980707182-1047b1d0c449?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1606980707182-1047b1d0c449?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop'
      ],
      link: 'https://kaspi.kz/shop/p/canon-eos-r6-mark-ii-kit-24-105mm-118308611/?c=750000000'
    },
    {
      id: 9,
      name: 'Dyson V15 Detect Absolute',
      description: 'Пылесос Dyson V15 Detect Absolute, золотистый. Лазерная подсветка, цифровой дисплей, мощностью 240 Вт.',
      price: 349990,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=400&fit=crop'
      ],
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-106714084/?c=750000000'
    },
    {
      id: 10,
      name: 'Herman Miller Aeron',
      description: 'Кресло Herman Miller Aeron, черное. Эргономичное офисное кресло с поддержкой поясницы и регулировками.',
      price: 899990,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1505843490918-d0e6b4e7d0e2?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&h=400&fit=crop'
      ],
      link: 'https://kaspi.kz/shop/p/herman-miller-aeron-105572184/?c=750000000'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }
}

