import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { BehaviorSubject, map, throwError } from 'rxjs';
import { Blog, BlogResponse } from 'src/app/interfaces/blog.interface';
import { enviroment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private readonly http = inject(HttpClient);
  private filteredBlogsSource = new BehaviorSubject<string>(
    '01/01/2019 TO 01/01/2020'
  );
  private BLOG_API_URL = `${enviroment.api}/api/content/`;
  filteredBlogs$ = this.filteredBlogsSource.asObservable();

  loadBlogs(params = '01/01/2019 TO 01/01/2020') {
    return this.http
      .post<any>(`${this.BLOG_API_URL}_search`, {
        query: ` +contentType:Blog +Blog.postingDate:[${params}]`,
        limit: 20,
        offset: 0,
      })
      .pipe(map((res) => res.entity.jsonObjectView.contentlets));
  }

  loadBlog(id: string) {
    return this.http
      .get<BlogResponse>(`${this.BLOG_API_URL}id/${id}`)
      .pipe(
        map((res) => res.contentlets[0] || [])
      );
  }

  setParams(params: any) {
    this.filteredBlogsSource.next(params);
  }
}
