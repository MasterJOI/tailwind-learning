import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-darkmode',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './darkmode.component.html',
  styleUrls: ['./darkmode.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DarkmodeComponent  {

  isDarkModeOn = false;

}
