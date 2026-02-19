import { Injectable, computed, signal } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private nextId = 4;

  private _tasks = signal<Task[]>([
    { id: 1, title: 'Read tutorial sections', status: 'done', createdAtIso: new Date().toISOString() },
    { id: 2, title: 'Build components + routing', status: 'open', createdAtIso: new Date().toISOString() },
    { id: 3, title: 'Add service + DI', status: 'open', createdAtIso: new Date().toISOString() },
  ]);

  tasks = computed(() => this._tasks());

  add(title: string) {
    const trimmed = title.trim();
    if (!trimmed) return;

    const newTask: Task = {
      id: this.nextId++,
      title: trimmed,
      status: 'open',
      createdAtIso: new Date().toISOString(),
    };
    this._tasks.update(list => [newTask, ...list]);
  }

  toggleDone(id: number) {
    this._tasks.update(list =>
      list.map(t => t.id === id ? { ...t, status: t.status === 'done' ? 'open' : 'done' } : t)
    );
  }

  remove(id: number) {
    this._tasks.update(list => list.filter(t => t.id !== id));
  }

  clearDone() {
    this._tasks.update(list => list.filter(t => t.status !== 'done'));
  }
}

