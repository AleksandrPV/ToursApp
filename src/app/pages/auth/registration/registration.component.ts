import { NgClass } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { UserService } from '../../../services/user.service';
import { IUserRegister, userObj } from '../../../models/IUser';
import { MessageService } from 'primeng/api';
import { HttpClient, httpResource } from '@angular/common/http';

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

  
  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) {
    
  }

  ngOnInit(): void {
    console.log("OnInit -> RegistrationComponent")
  }

  ngOnDestroy(): void {
    console.log("OnDestroy -> RegistrationComponent")
  }

  onAuth(ev: Event): void {
    console.log(ev);
    // this.http.post('http://localhost:3000/users/', userObj).subscribe((data))
    // this.userService.addUser({login: this.login, password: this.password})
    const postObj = {login: this.login, password: this.password, email: this.email} as IUserRegister
    this.userService.registerUser(postObj).subscribe(
      () => {
        this.initToast('success', 'Регистрация прошла успешна!')},
      () => {
        this.initToast('error', 'Произошла ошибка!' )}
    )
  }

  initToast(type: 'error' | 'success', text: string): void {
    this.messageService.add({severity: type, detail: text, life: 3000 })
  }



}
