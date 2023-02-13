import { Component } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  bootstrapFire,
  bootstrapLightningChargeFill,
  bootstrapOpticalAudioFill,
  bootstrapPlusLg,
} from '@ng-icons/bootstrap-icons';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [SidebarComponent, NgIconComponent, RouterModule],
  viewProviders: [
    provideIcons({
      bootstrapFire,
      bootstrapPlusLg,
      bootstrapLightningChargeFill,
      bootstrapOpticalAudioFill,
    }),
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test-tailwind';
}
