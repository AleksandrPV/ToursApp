import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ISettings } from '../../models/settings';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-settings',
  imports: [ButtonModule, PasswordChangeComponent, RouterModule],
  standalone: true,
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit {
  
  @ViewChild(PasswordChangeComponent) passwordChangeComponent: PasswordChangeComponent;
  
  menuItems: ISettings[] = [
    {label: "Смена пароля", path: "password-change"},
    {label: "Статистика", path: "statistics"}
  ]

  ngOnInit(): void {

  }

  onMenuItemClick(path: string): void {
    
    // if (path === 'passwordChange') {
    //   this.passwordChangeComponent.show();
    // }
  }
}
