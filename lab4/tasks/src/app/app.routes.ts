import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { TasksComponent } from './pages/tasks.component';
import { AboutComponent } from './pages/about.component';
import { UsersComponent } from './pages/users.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'tasks', component: TasksComponent },
  { path: 'about', component: AboutComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', redirectTo: '' },
];
