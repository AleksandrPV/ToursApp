import { Component, OnInit } from '@angular/core';
import { ToursService } from '../../services/tours.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tour-item',
  imports: [],
  templateUrl: './tour-item.component.html',
  styleUrl: './tour-item.component.scss'
})
export class TourItemComponent implements OnInit {
    tourId: string = null;
    tourData: any = null;

    constructor(private tourService: ToursService, private route: ActivatedRoute) {}

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
}
