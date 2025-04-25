import { Component, OnInit } from '@angular/core';
import { ToursService } from '../../services/tours.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { NearestToursComponent } from './nearest-tours/nearest-tours.component';


@Component({
  selector: 'app-tour-item',
  imports: [CardModule, ButtonModule, RouterLink, NearestToursComponent],
  templateUrl: './tour-item.component.html',
  styleUrl: './tour-item.component.scss'
})
export class TourItemComponent implements OnInit {
    tourId: string = null;
    tourData: any = null;

    constructor(
      private tourService: ToursService,
      private router: Router,
      private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
      this.tourId = this.route.snapshot.paramMap.get('id');
      this.route.paramMap.subscribe((par) => {
        console.log('***', par)
      })

      this.tourService.getTourById(this.tourId).subscribe((data) => {
        if (data) {
          console.log('data', data)
          this.tourData = data;
        }
      })
    }

    initOrder(ev: Event):void {
      this.router.navigate(['/tours/order', this.tourData.id]);
    }
}
