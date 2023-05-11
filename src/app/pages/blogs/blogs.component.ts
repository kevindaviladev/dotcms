import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { Router, RouterModule } from '@angular/router';
import { BlogService } from 'src/app/services/blog/blog.service';
import { NewCardComponent } from '../../components/new-card/new-card.component';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-blogs',
  standalone: true,
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
  imports: [CommonModule, HeaderComponent, RouterModule, NewCardComponent],
})
export class BlogsComponent {
  blogService = inject(BlogService);
  router = inject(Router);

  blogs$ = this.blogService.filteredBlogs$.pipe(
    switchMap((params) => this.blogService.loadBlogs(params))
  );
}
