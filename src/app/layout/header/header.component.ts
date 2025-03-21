
import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '../../models/IUser';
import { MenuItem } from 'primeng/api';
import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';
import { Menubar, MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [ DatePipe, MenubarModule,ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',

})
export class HeaderComponent implements OnInit, OnDestroy {
  dateTime: Date;
  menuItems: MenuItem[] = [];
  user: IUser;
  logoutIcon = 'pi pi-user';
  
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.user = this.userService.getUser();
    this.menuItems = this.initMenuItems();

    setInterval(() => {
      this.dateTime = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {}
    items: MenuItem[] | undefined;
    initMenuItems() {
      return [
        {
          label: 'Главная',
          RouterLink: ['/tours'],
        },
        {
          label: 'Настройки',
          RouterLink: ['/settings'],
        },
        {
          label: 'Заказы',
          RouterLink: ['/orders'],
        }
      ];
    }

  logout(): void {
    this.userService.setUser(null);
    this.router.navigate(['/auth']);
  }

  hoverLogoutBtn(val: boolean): void {  
    this.logoutIcon = val ? 'pi pi-sign-out' : 'pi pi-user';
  }

}
