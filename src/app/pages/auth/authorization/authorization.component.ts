import { NgClass } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { UserService } from '../../../services/user.service';
import { IUser } from '../../../models/IUser';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-authorization',
  imports: [
        NgClass, 
        FormsModule,
        ButtonModule,
        InputTextModule,
  ],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss'
})
export class AuthorizationComponent implements OnDestroy, OnInit {

  login: string;
  password: string;
  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private router: Router) {

  }

  ngOnInit(): void {
    console.log("OnInit -> AuthorizationComponent")
  }

  ngOnDestroy(): void {
    console.log("OnDestroy -> AuthorizationComponent")
  }

  onAuth(ev: Event): void {
    console.log(ev);
    
    const user: IUser = {
      login: this.login, 
      password: this.password
    }

    this.userService.authUser(user).subscribe(
      () => {
        this.router.navigate(['tickets']);
      },
      () => {
        this.initToast('error', 'Произошла ошибка!' )}
    )
    
  }
  
  initToast(type: 'error' | 'success', text: string): void {
    this.messageService.add({severity: type, detail: text, life: 3000 })
  }


}
