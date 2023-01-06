import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DestinationDto} from '../destination.dto';

@Component({
  selector: 'app-destination-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
      <img class="h-32 w-32 flex-shrink-0" src='{{destination.imageUrl}}' alt='{{destination.imageAlt}}'/>
      <div class="px-6 py-4">
        <h3 class="text-lg font-semibold text-gray-800">{{destination.city}}</h3>

        <p class="text-gray-600">{{destination.averagePrice}} / night average</p>
        <div class="mt-4">
          <a href="#" class="text-brand-dark hover:text-brand font-semibold text-sm">
            Explore {{destination.propertyCount}} properties
          </a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./destination-card.component.css']
})
export class DestinationCardComponent {

  @Input() destination = new DestinationDto();

}
