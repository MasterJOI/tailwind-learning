import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationCardComponent } from './destination-card/destination-card.component';
import { DestinationDto } from './destination.dto';

@Component({
  selector: 'app-extract-reusable-components',
  standalone: true,
  imports: [CommonModule, DestinationCardComponent],
  templateUrl: './extract-reusable-components.component.html',
  styleUrls: ['./extract-reusable-components.component.css'],
})
export class ExtractReusableComponentsComponent {
  data: DestinationDto[] = [
    {
      city: 'Toronto',
      averagePrice: 120,
      propertyCount: 76,
      imageUrl: 'assets/img/toronto.jpg',
      imageAlt: 'Toronto skyline',
    },
    {
      city: 'Malibu',
      averagePrice: 215,
      propertyCount: 43,
      imageUrl: 'assets/img/malibu.jpg',
      imageAlt: 'Cliff in Malibu',
    },
    {
      city: 'Chicago',
      averagePrice: 130,
      propertyCount: 115,
      imageUrl: 'assets/img/chicago.jpg',
      imageAlt: 'Chicago skyline',
    },
    {
      city: 'Seattle',
      averagePrice: 135,
      propertyCount: 63,
      imageUrl: 'assets/img/seattle.jpg',
      imageAlt: 'Seattle skyline',
    },
    {
      city: 'Colorado',
      averagePrice: 85,
      propertyCount: 47,
      imageUrl: 'assets/img/colorado.jpg',
      imageAlt: 'Lake in Colorado',
    },
    {
      city: 'Miami',
      averagePrice: 115,
      propertyCount: 86,
      imageUrl: 'assets/img/miami.jpg',
      imageAlt: 'Beach in Miami',
    },
  ];
}
