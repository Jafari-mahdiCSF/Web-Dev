import { Injectable } from '@angular/core';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: Event[] = [
    {
      id: 1,
      name: 'BUBNU$ - Концерт в Алматы',
      description: 'Сольный концерт популярного казахстанского рэп-исполнителя BUBNU$. Презентация нового альбома и лучшие хиты.',
      price: 7900,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop'
      ],
      link: 'https://ticketon.kz/event/bubnu-koncert-v-almaty'
    },
    {
      id: 2,
      name: 'Miyagi & Andy Panda: M-22 Tour',
      description: 'Большой сольный концерт Miyagi & Andy Panda с презентацией нового альбоба M-22. Лучшие хиты и новая программа.',
      price: 15000,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop'
      ],
      link: 'https://ticketon.kz/event/miyagi-andy-panda-m22-tour'
    },
    {
      id: 3,
      name: 'Спектакль "Қыз Жібек"',
      description: 'Легендарная казахская постановка о любви и верности. Национальный театр оперы и балета представляет бессмертную классику.',
      price: 5000,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1503095396549-807759245b35?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?w=400&h=400&fit=crop'
      ],
      link: 'https://ticketon.kz/event/kyz-zhibek'
    },
    {
      id: 4,
      name: 'Jah Khalib - JAH FEST',
      description: 'Грандиозный фестиваль от Jah Khalib с участием звезд казахстанской и российской сцены. Хиты и новые треки.',
      price: 8900,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400&h=400&fit=crop'
      ],
      link: 'https://ticketon.kz/event/jah-khalib-jah-fest'
    },
    {
      id: 5,
      name: 'Стендап: Нурлан Сабуров',
      description: 'Большой стендап концерт Нурлана Сабурова. Новые шутки, наблюдения и искрометный юмор от лучшего комика Казахстана.',
      price: 11900,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=400&fit=crop'
      ],
      link: 'https://ticketon.kz/event/nurlan-saburov-standup'
    },
    {
      id: 6,
      name: 'Димаш Кудайберген - Stranger',
      description: 'Сольный концерт Димаша Кудайбергена с программой "Stranger". Уникальный голос и незабываемое шоу.',
      price: 25000,
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400&h=400&fit=crop'
      ],
      link: 'https://ticketon.kz/event/dimash-kudaibergen-stranger'
    },
    {
      id: 7,
      name: 'Мюзикл "Продюсеры"',
      description: 'Бродвейский мюзикл "Продюсеры" на сцене театра Астана Опера. Яркое шоу, музыка и танцы.',
      price: 7000,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1516981442399-1d66a5e371b7?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=400&fit=crop'
      ],
      link: 'https://ticketon.kz/event/producers-musical'
    },
    {
      id: 8,
      name: 'Skryptonite - Концерт',
      description: 'Сольный концерт Skryptonite с новой программой. Лучшие треки и атмосфера настоящего хип-хопа.',
      price: 9900,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=400&h=400&fit=crop'
      ],
      link: 'https://ticketon.kz/event/skryptonite-concert'
    },
    {
      id: 9,
      name: 'Балет "Щелкунчик"',
      description: 'Волшебный балет "Щелкунчик" на музыку Чайковского. Праздничная постановка для всей семьи.',
      price: 6000,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=400&h=400&fit=crop'
      ],
      link: 'https://ticketon.kz/event/nutcracker-ballet'
    },
    {
      id: 10,
      name: 'Imanbek & Friends',
      description: 'Грандиозное выступление Imanbek и его друзей. Лучшие электронные хиты и специальные гости.',
      price: 8500,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1571266028243-d220c6e1b8a8?w=400&h=400&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1571266028243-d220c6e1b8a8?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400&h=400&fit=crop'
      ],
      link: 'https://ticketon.kz/event/imanbek-friends'
    }
  ];

  getEvents(): Event[] {
    return this.events;
  }
}

