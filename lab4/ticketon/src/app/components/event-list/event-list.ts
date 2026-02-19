import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCard } from '../event-card/event-card';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-event-list',
  imports: [CommonModule, EventCard],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css',
})
export class EventList implements OnInit {
  events: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}

