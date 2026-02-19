import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventList } from './components/event-list/event-list';

@Component({
  selector: 'app-root',
  imports: [CommonModule, EventList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'ticketon-store';
}
