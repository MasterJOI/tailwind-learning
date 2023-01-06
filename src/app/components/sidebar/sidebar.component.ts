import {Component} from '@angular/core';
import {SidebarIconComponent} from './sidebar-icon/sidebar-icon.component';
import {RouterModule} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  imports: [
    SidebarIconComponent,
    RouterModule
  ],
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

}
