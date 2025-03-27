import { Component, inject, Input, model, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ITour } from '../../../models/ITour';
import { ToursService } from '../../../services/tours.service';
import { GalleriaModule } from 'primeng/galleria';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-nearest-tours',
  imports: [GalleriaModule, NgOptimizedImage],
  standalone: true,
  templateUrl: './nearest-tours.component.html',
  styleUrl: './nearest-tours.component.scss'
})
export class NearestToursComponent implements OnInit, OnChanges {
  @Input() tourNearest: ITour = null;

  tourService = inject(ToursService);
  toursArr = model<ITour[]>([]);

  constructor() {}

  ngOnInit() {
    console.log('tourNearest = ', this.tourNearest)
  }

  ngOnChanges(changes: SimpleChanges): void {
    const tour = changes['tourNearest']?.currentValue as ITour;

    if (tour?.locationId) {
      this.tourService.getNearestTourByLocationId(tour.locationId).subscribe((data) => {
        this.toursArr.set(data);
      })
    }
    console.log('changes = ', changes['tourNearest'])
  }

}
