import { Component, Input } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-sidebar-icon',
  standalone: true,
  template: `
    <div class="sidebar-icon group">
      <ng-icon name="{{ iconName }}" size="30"></ng-icon>
      <span class="sidebar-tooltip group-hover:scale-100">
        {{ tooltipText }}
      </span>
    </div>
  `,
  imports: [NgIconComponent],
  styleUrls: ['./sidebar-icon.component.css'],
})
export class SidebarIconComponent {
  @Input() iconName = '';
  @Input() tooltipText = '';
}
