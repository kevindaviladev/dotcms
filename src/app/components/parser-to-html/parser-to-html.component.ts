import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsArrayPipe } from 'src/app/pipes/utils/is-array.pipe';

@Component({
  selector: 'app-parser-to-html',
  standalone: true,
  imports: [CommonModule, IsArrayPipe],
  templateUrl: './parser-to-html.component.html',
  styleUrls: ['./parser-to-html.component.scss'],
})
export class ParserToHtmlComponent {
  @Input({ required: true }) content!: any;
}
