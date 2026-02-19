import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="card">
      <h2>Home</h2>

      <p>
        This page shows: <b>signals</b>, <b>template syntax</b>,
        <b>*ngIf / *ngFor</b>, and <b>event binding</b>.
      </p>

      <div class="row">
        <button class="btn" (click)="inc()">Clicked: {{ count() }}</button>
        <button class="btn ghost" (click)="toggle()">Toggle list</button>
      </div>

      <p class="muted">Double count (computed): {{ doubleCount() }}</p>

      <div *ngIf="showList(); else hidden">
        <h3>Quick topics</h3>
        <ul>
          <li *ngFor="let t of topics(); trackBy: trackByValue">{{ t }}</li>
        </ul>
      </div>

      <ng-template #hidden>
        <p class="muted">List hidden.</p>
      </ng-template>
    </section>
  `,
  styles: [`
    .card { border: 1px solid #e7e7e7; border-radius: 16px; padding: 16px; background: #fff; }
    .row { display:flex; gap:10px; flex-wrap: wrap; margin: 10px 0; }
    .btn { border: 0; border-radius: 12px; padding: 10px 12px; background: #111; color: #fff; cursor: pointer; }
    .btn.ghost { background: #f2f2f2; color: #111; }
    .muted { color: #666; }
  `],
})
export class HomeComponent {
  count = signal(0);
  showList = signal(true);
  topics = signal<string[]>([
    'Standalone components',
    'Signals',
    'ngIf / ngFor',
    'Event binding (click)',
    'Computed values',
  ]);

  doubleCount = computed(() => this.count() * 2);

  inc() { this.count.update(v => v + 1); }
  toggle() { this.showList.update(v => !v); }
  trackByValue = (_: number, v: string) => v;
}

