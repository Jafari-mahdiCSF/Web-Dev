import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-event-card',
  imports: [CommonModule],
  templateUrl: './event-card.html',
  styleUrl: './event-card.css',
})
export class EventCard {
  @Input() event!: Event;

  // For star rating
  get fullStars(): number[] {
    return Array(Math.floor(this.event.rating)).fill(0);
  }

  get hasHalfStar(): boolean {
    return this.event.rating % 1 >= 0.5;
  }

  get emptyStars(): number[] {
    const totalStars = 5;
    const filledStars = Math.floor(this.event.rating);
    const halfStar = this.hasHalfStar ? 1 : 0;
    return Array(totalStars - filledStars - halfStar).fill(0);
  }

  shareOnWhatsApp() {
    const text = `Check out this event: ${this.event.name}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text + ' - ' + this.event.link)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.event.link)}&text=${encodeURIComponent(this.event.name)}`;
    window.open(url, '_blank');
  }
}
