import { NgClass } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { UserService } from '../../../services/user.service';

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

  login: string = null;
  password: string;
  repeatPassword: string;
  cardNumber: string;
  email: string;
  isRemember: boolean;
  labelText: string = 'Сохранить пользователя в хранилище';

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    console.log("OnInit -> RegistrationComponent")
  }

  ngOnDestroy(): void {
    console.log("OnDestroy -> RegistrationComponent")
  }

  onAuth(ev: Event): void {
    console.log(ev);
    this.userService.addUser({login: this.login, password: this.password})
  }

}
