import { NgClass } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
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

  ngOnInit(): void {
    console.log("OnInit -> AuthorizationComponent")
  }

  ngOnDestroy(): void {
    console.log("OnDestroy -> AuthorizationComponent")
  }

}
