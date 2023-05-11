import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog } from 'src/app/interfaces/blog.interface';
import { ImagePipe } from 'src/app/pipes/image/image.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-new-card',
  standalone: true,
  imports: [CommonModule, ImagePipe, RouterModule],
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss'],
})
export class NewCardComponent {
  @Input({ required: true }) blog!: Blog;



}
