import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ISettings } from '../../models/settings';
import { PasswordChangeComponent } from './password-change/password-change.component';





@Component({
  selector: 'app-settings',
  imports: [ButtonModule, PasswordChangeComponent],
  standalone: true,
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit {
  
  menuItems: ISettings[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {label: "Смена пароля", path: "passwordChange"},
      {label: "Статистика", path: "statistics"}
    ]
  }
}
