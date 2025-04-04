import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ToursService } from '../../services/tours.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TourItemComponent } from '../tour-item/tour-item.component';
import { ITour } from '../../models/ITour';
import { NgOptimizedImage, SlicePipe } from '@angular/common';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { SearchPipe } from '../../shared/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { HighlightActiveDirective } from '../../shared/directives/highlight-active.directive';
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

  constructor (
    private toursService: ToursService,
    private route: ActivatedRoute,
    private router: Router ) {}

  ngOnInit(): void {
    console.log('Activated route = ', this.route)
    this.toursService.getTours().subscribe((data) => {
      if (Array.isArray(data?.tours)) {
        this.tours = data.tours;
        this.toursStore = [... data.tours]
      }
    })

  }

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