import { Routes } from '@angular/router';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BlogComponent } from './components/blog/blog.component';

export const routes: Routes = [
  {
    path: 'blogs',
    loadComponent: () =>
      import('./pages/blogs/blogs.component').then((m) => BlogsComponent),
    children: [
      {
        path: ':id',
        loadComponent: () =>
          import('./components/blog/blog.component').then((c) => BlogComponent),
      },
    ],
  },

  { path: '', redirectTo: 'blogs', pathMatch: 'full' },
];
