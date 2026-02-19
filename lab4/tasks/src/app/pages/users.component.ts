import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../services/users.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="card">
      <h2>HTTP demo</h2>
      <button class="btn" (click)="load()">Load users</button>

      <ul *ngIf="users.length">
        <li *ngFor="let u of users">{{ u.id }} — {{ u.name }}</li>
      </ul>
    </section>
  `,
  styles: [`
    .card { border: 1px solid #e7e7e7; border-radius: 16px; padding: 16px; background: #fff; }
    .btn { border: 0; border-radius: 12px; padding: 10px 12px; background: #111; color: #fff; cursor: pointer; }
  `],
})
export class UsersComponent {
  users: { id: number; name: string }[] = [];

  constructor(private usersService: UsersService) {}

  load() {
    this.usersService.list().subscribe(data => (this.users = data));
  }
}

