import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { RegistrationComponent } from './registration/registration.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { TabsModule } from 'primeng/tabs';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-auth',
  imports: [RegistrationComponent, AuthorizationComponent, TabsModule, Toast],
  providers: [MessageService],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  // encapsulation: ViewEncapsulation.None
})
export class AuthComponent implements OnDestroy, OnInit {

  ngOnInit(): void {
    console.log("OnInit -> AuthComponent")
  }

  ngOnDestroy(): void {
    console.log("OnDestroy -> AuthComponent")
  }
  
}
