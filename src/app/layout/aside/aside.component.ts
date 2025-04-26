import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { SelectChangeEvent, SelectModule} from 'primeng/select';
import { ToursService } from '../../services/tours.service';
import { Observable, Subscription } from 'rxjs';
import { DatePickerModule } from 'primeng/datepicker';
import { ITourTypes } from '../../models/ITour';
@Component({
  selector: 'app-aside',
  imports: [SelectModule, FormsModule, DatePickerModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent implements OnInit {
  
  private tourService = inject(ToursService);
  
  date: Date = null;

  selectedType: ITourTypes = null;

  constructor ( private toursService: ToursService ) {}
    
  tourTypes: ITourTypes[] = [
    { key: 'single', label: 'Одиночный' },
    { key: 'group', label: 'Групповой' },
    { key: 'all', label: 'Все' },
  ];

  ngOnInit(): void {
    this.selectedType = this.tourTypes.find((type) => type.key === 'all');
  }

  changeTourType(event: SelectChangeEvent): void {
    this.tourService.initChangeTourType(this.selectedType);
  }

  changeDate(event: Date): void {
    console.log('Selected date:', event);
    this.tourService.initChangeTourDate(event);
  }

  clearDataFilter(event: Date): void {
    this.tourService.clearDataFilter(event);
  }
}
