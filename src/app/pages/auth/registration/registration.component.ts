import { NgClass } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-registration',
  imports: [
    NgClass, 
    FormsModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent implements OnInit, OnDestroy {

  login: string;
  password: string;
  repeatPassword: string;
  cardNumber: string;
  email: string;
  isRemember: boolean;
  labelText: string = 'Сохранить пользователя в хранилище';

  constructor() {

  }

  ngOnInit(): void {
    console.log("OnInit -> RegistrationComponent")
  }

  ngOnDestroy(): void {
    console.log("OnDestroy -> RegistrationComponent")
  }

}
