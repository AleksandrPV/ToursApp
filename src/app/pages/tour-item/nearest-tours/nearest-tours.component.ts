import { AfterViewInit, Component, ElementRef, EventEmitter, inject, Input,
   model, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ITour } from '../../../models/ITour';
import { ToursService } from '../../../services/tours.service';
import { GalleriaModule } from 'primeng/galleria';
import { NgOptimizedImage, SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { CardModule } from 'primeng/card';
import { fromEvent, Subscription } from 'rxjs';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-nearest-tours',
  imports: [GalleriaModule,
            CardModule,
            InputGroupAddonModule,
            InputGroupModule,
            InputTextModule,
            ButtonModule,
            FormsModule,
            NgOptimizedImage
          ],
  standalone: true,
  templateUrl: './nearest-tours.component.html',
  styleUrl: './nearest-tours.component.scss'
})
export class NearestToursComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() tourNearest: ITour = null;
  @Output() onTourChange = new EventEmitter<ITour>();

  @ViewChild('searchInput') searchInput: ElementRef;
  
  tourService = inject(ToursService);
  toursArr = model<ITour[]>([]);
  toursArrCopy = model<ITour[]>([]);
  activeLocationId: string;
  subscription: Subscription;

  constructor() {}

  ngOnInit() {
    // console.log('searchInput', this.searchInput)
    // console.log('tourNearest = ', this.tourNearest)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const tour = changes['tourNearest']?.currentValue as ITour;

    if (tour?.locationId && this.activeLocationId !== tour?.locationId) {
      this.activeLocationId = tour?.locationId;
      this.tourService.getNearestTourByLocationId(this.activeLocationId).subscribe((data) => {
        this.toursArr.set(data);
        this.toursArrCopy.set(data);
      });
    }
    console.log('changes = ', changes['tourNearest'])
  }

  ngAfterViewInit(): void {
    console.log('searchInput afterView', this.searchInput)

    const eventObservable = fromEvent<InputEvent>(this.searchInput.nativeElement, 'input');
    this.subscription = eventObservable.subscribe((ev) => {
      const inputTargetValue = (ev.target as HTMLInputElement).value;
      console.log('inputTargetValue', inputTargetValue, this.toursArr())
      if (inputTargetValue === '') {
        this.toursArr.set(this.toursArrCopy());
      } else {
        const newTours = this.tourService.searchTours(this.toursArrCopy(), inputTargetValue);
        this.toursArr.set(newTours);
      }
    })
  }

  activeIndexChange(index: number) {
    console.log('index', index)
    const tours = this.toursArr();
    const activeTour = tours.find((el, i) => i === index);

    this.onTourChange.emit(activeTour);
  }

}
