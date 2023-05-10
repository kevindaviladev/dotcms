import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  private readonly headers$ = new BehaviorSubject<string | null>(null);

  constructor() {}

  buildHeaders() {
    const authHeaders = this.headers$.value;
    return
  };
}
