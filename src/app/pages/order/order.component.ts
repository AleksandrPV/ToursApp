import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ToursService } from '../../services/tours.service';
import { ITour } from '../../models/ITour';
import { InputNumberModule } from 'primeng/inputnumber'
import { InputTextModule } from 'primeng/inputtext'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { ButtonModule } from 'primeng/button';
import { UserService } from '../../services/user.service';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-order',
  imports: [ RouterLink,
            ReactiveFormsModule,
            InputNumberModule,
            InputTextModule,
            DatePickerModule,
            ButtonModule,

   ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit {
  tourId: string = null;
  tour: ITour;
  userForm: FormGroup;

  constructor(private tourService: ToursService,
              private route: ActivatedRoute,
              private userService: UserService
  ) {}

  ngOnInit(): void {
    this.tourId = this.route.snapshot.paramMap.get('id');
    this.tourService.getTourById(this.tourId).subscribe((tour) => {
      this.tour = tour;
    })

      //reactive form
    this.userForm = new FormGroup({
      firstName: new FormGroup('', {validators: Validators.required}),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      cardNumber: new FormControl(''),
      birthDate: new FormControl(''),
      age: new FormControl(''),
      citizenship: new FormControl(''),
    })
  }

  initOrder(): void {
    const userLogin = this.userService.getUser().login;
    const personalData = this.userForm.getRawValue();
    const postObj = {
      userLogin,
      tourId: this.tourId,
      personalData: [personalData]
    }
    this.tourService.postOrder(postObj).subscribe();
  }

}
