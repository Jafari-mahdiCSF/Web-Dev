export type TaskStatus = 'open' | 'done';

export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
  createdAtIso: string;
}

