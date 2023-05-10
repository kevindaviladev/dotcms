import { Routes } from '@angular/router';
import { BlogsComponent } from './pages/blogs/blogs.component';

export const routes: Routes = [
  {
    path: 'blogs',
    loadComponent: () =>
      import('./pages/blogs/blogs.component').then((m) => BlogsComponent),
  },

  {path: '', redirectTo: 'blogs', pathMatch: 'full'}
];
