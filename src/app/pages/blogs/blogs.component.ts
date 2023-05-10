import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-blogs',
  standalone: true,
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
  imports: [CommonModule, HeaderComponent],
})
export class BlogsComponent {}
