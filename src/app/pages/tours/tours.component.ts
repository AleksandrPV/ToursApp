import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ToursService } from '../../services/tours.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TourItemComponent } from './tour-item/tour-item.component';

@Component({
  selector: 'app-tours',
  imports: [CardModule],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.scss'
})
export class ToursComponent {
  
  tours: any = [];

  constructor (
    private toursService: ToursService,
    private route: ActivatedRoute,
    private router: Router ) {}

  ngOnInit(): void {
    console.log('Activated route = ', this.route)
    this.toursService.getTours().subscribe((data) => {
      if (Array.isArray(data?.tours)) {
        this.tours = data.tours;
      }
    })
  }

  goToTour(item: any): void {
    this.router.navigate(['tour', item.id], {relativeTo: this.route})
  }
}