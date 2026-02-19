import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../services/tasks.service';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="card">
      <h2>Tasks</h2>

      <form class="row" (ngSubmit)="addTask()">
        <input
          class="input"
          name="title"
          [(ngModel)]="title"
          placeholder="Add a task..."
          autocomplete="off"
        />
        <button class="btn" type="submit">Add</button>
        <button class="btn ghost" type="button" (click)="svc.clearDone()">Clear done</button>
      </form>

      <div class="row filters">
        <label><input type="radio" name="f" [value]="'all'" [(ngModel)]="filter" /> All</label>
        <label><input type="radio" name="f" [value]="'open'" [(ngModel)]="filter" /> Open</label>
        <label><input type="radio" name="f" [value]="'done'" [(ngModel)]="filter" /> Done</label>
      </div>

      <p class="muted">Showing: {{ filtered().length }} / {{ svc.tasks().length }}</p>

      <ul class="list" *ngIf="filtered().length; else empty">
        <li class="item" *ngFor="let t of filtered(); trackBy: trackById">
          <button class="icon" type="button" (click)="svc.toggleDone(t.id)" [attr.aria-label]="'toggle ' + t.title">
            {{ t.status === 'done' ? '☑' : '☐' }}
          </button>

          <div class="text">
            <div [class.done]="t.status === 'done'">{{ t.title }}</div>
            <div class="meta">{{ t.createdAtIso | date:'medium' }}</div>
          </div>

          <button class="icon danger" type="button" (click)="svc.remove(t.id)" aria-label="delete">🗑</button>
        </li>
      </ul>

      <ng-template #empty>
        <p class="muted">No tasks yet. Add one.</p>
      </ng-template>
    </section>
  `,
  styles: [`
    .card { border: 1px solid #e7e7e7; border-radius: 16px; padding: 16px; background: #fff; }
    .row { display:flex; gap:10px; flex-wrap: wrap; margin: 10px 0; align-items: center; }
    .input {
      flex: 1; min-width: 220px;
      padding: 10px 12px;
      border-radius: 12px;
      border: 1px solid #ddd;
      outline: none;
    }
    .btn { border: 0; border-radius: 12px; padding: 10px 12px; background: #111; color: #fff; cursor: pointer; }
    .btn.ghost { background: #f2f2f2; color: #111; }
    .filters label { display:flex; gap:6px; align-items:center; color:#333; }
    .muted { color: #666; }

    .list { list-style: none; padding: 0; margin: 10px 0 0; display: grid; gap: 10px; }
    .item {
      display:flex; gap: 10px; align-items: center;
      border: 1px solid #eee;
      border-radius: 14px;
      padding: 10px;
    }
    .icon {
      width: 38px; height: 38px;
      border-radius: 12px;
      border: 1px solid #e7e7e7;
      background: #fff;
      cursor: pointer;
      font-size: 16px;
    }
    .icon.danger { border-color: #ffd4d4; }
    .text { flex: 1; }
    .done { text-decoration: line-through; color: #888; }
    .meta { color: #777; font-size: 12px; margin-top: 2px; }
  `],
})
export class TasksComponent {
  title = '';
  filter = 'all' as 'all' | 'open' | 'done';

  constructor(public svc: TasksService) {}

  filtered = computed(() => {
    const f = this.filter;
    const all = this.svc.tasks();
    if (f === 'all') return all;
    return all.filter(t => t.status === f);
  });

  addTask() {
    this.svc.add(this.title);
    this.title = '';
  }

  trackById = (_: number, t: { id: number }) => t.id;
}

