import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MarkdownModule} from "ngx-markdown";

@Component({
  selector: 'app-cms-typography',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  templateUrl: './cms-typography.component.html',
  styleUrls: ['./cms-typography.component.css']
})
export class CmsTypographyComponent {

  cms = '__Advertisement :)__';

}
