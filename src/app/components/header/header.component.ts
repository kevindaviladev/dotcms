import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  blogService = inject(BlogService);

  onFilterChange(event: Event) {
    this.blogService.setParams((event.target as HTMLSelectElement).value);
  }
}
