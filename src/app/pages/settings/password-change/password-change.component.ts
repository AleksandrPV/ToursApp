import { NgClass } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { UserService } from '../../../services/user.service';
import { IUser, IUserRegister } from '../../../models/IUser';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-password-change',
  imports: [
    FormsModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
  ],
  templateUrl: './password-change.component.html',
  styleUrl: './password-change.component.scss'
})
export class PasswordChangeComponent implements OnInit, OnDestroy {

  login: string = null;
  oldPassword: string;
  newPassword: string;

  constructor(
    private userService: UserService,
  ) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  onNewPassword(ev: Event): void {
    const postObj = {login: sessionStorage.getItem('login'), password: this.newPassword} as IUser
    this.userService.setNewUserPassword(postObj).subscribe(
      () => {
        console.log("успешно"),
      () => {
        console.log("ошибка")}
      })
    }
}

// sessionStorage.getItem('login')
