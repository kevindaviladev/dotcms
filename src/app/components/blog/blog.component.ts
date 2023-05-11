import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog/blog.service';
import {
  Observable,
  catchError,
  map,
  of,
  startWith,
  tap,
  throwError,
} from 'rxjs';
import { Blog } from 'src/app/interfaces/blog.interface';
import { ImagePipe } from 'src/app/pipes/image/image.pipe';
import { ParserToHtmlComponent } from '../parser-to-html/parser-to-html.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, ImagePipe, ParserToHtmlComponent],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  route = inject(ActivatedRoute);
  blogService = inject(BlogService);

  blog$!: Observable<Blog>;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.loadBlog(id);
    });
  }

  loadBlog(id: string) {
    this.blog$ = this.blogService.loadBlog(id);
  }
}
