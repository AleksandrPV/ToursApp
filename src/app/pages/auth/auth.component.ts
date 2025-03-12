import { Component, OnDestroy, OnInit } from '@angular/core';
import { RegistrationComponent } from './registration/registration.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-auth',
  imports: [RegistrationComponent, AuthorizationComponent, TabsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnDestroy, OnInit {

  ngOnInit(): void {
    console.log("OnInit -> AuthComponent")
  }

  ngOnDestroy(): void {
    console.log("OnDestroy -> AuthComponent")
  }
  
}
