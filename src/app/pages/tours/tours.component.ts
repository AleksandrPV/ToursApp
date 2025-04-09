import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ToursService } from '../../services/tours.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TourItemComponent } from '../tour-item/tour-item.component';
import { ICountriesResponseItem, ITour, ITourServerRes } from '../../models/ITour';
import { NgOptimizedImage, SlicePipe } from '@angular/common';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { SearchPipe } from '../../shared/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { HighlightActiveDirective } from '../../shared/directives/highlight-active.directive';
import { isValid } from 'date-fns';

@Component({
  selector: 'app-tours',
  imports: [
    CardModule,
    SlicePipe,
    InputGroupAddonModule,
    InputGroupModule,
    ButtonModule,
    SearchPipe,
    FormsModule,
    NgOptimizedImage,
    HighlightActiveDirective
  ],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.scss',
  
})
export class ToursComponent {
  
  tours: ITour[] = [];
  toursStore: ITour[] = [];
  // searchValue: string = ''; переменная не нужна, так как используем шаблонную переменную
  // subscription: Subscription;

  constructor (
    private toursService: ToursService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {

    this.toursService.tourType$.subscribe((tour) => {
      console.log('tour type', tour)
      switch (tour?.key) {
        case 'single':
          this.tours = this.toursStore.filter((item) => item.type === 'single');
          break;
        case 'group':
          this.tours = this.toursStore.filter((item) => item.type === 'group');
          break;
        case 'all':
          this.tours = [...this.toursStore];
          break;
      }

    });

    //Date 
    this.toursService.tourDate$.subscribe((date) => {
      console.log('******date', date)

      this.tours = this.toursStore.filter((tour) => {
        if (isValid(new Date(tour.date))) {

          const tourDate = new Date(tour.date).setHours(0, 0, 0, 0);
          const calendarDate = new Date(date).setHours(0, 0, 0);
          return tourDate === calendarDate;
        } else {
          return false
        }
      });
    })

    console.log('Activated route = ', this.route)
    this.toursService.getTours().subscribe((data) => {
      console.log("________DATA = ",  data)
            
      if (Array.isArray(data)) {
        this.tours = data;
        this.toursStore = [... data]
      }
      // toursWithCountries
      // if (Array.isArray(data?.tours)) {
      //   this.tours = data.tours;
      //   this.toursStore = [... data.tours]
      // }
    })

  }

  // ngOnDestroy(): void {
  //   // this.subscription.unsubscribe();
  // }

  goToTour(item: ITour): void {
    this.router.navigate(['tour', item.id], {relativeTo: this.route});
  }

  searchTour(ev: Event) {
    const target = ev.target as HTMLInputElement;
    const targetValue = target.value;
    this.tours = this.toursService.searchTours(this.toursStore, targetValue)
  }

  selectActive(index: number): void {
    console.log('index', index)
    const targetTour = this.tours.find((tour, i) => i === index);
    if (targetTour) {
      this.goToTour(targetTour);
    }
  }
}