
import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '../../models/IUser';
import { MenuItem } from 'primeng/api';
import { UserService } from '../../services/user.service';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Menubar, MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [ DatePipe, MenubarModule, ButtonModule, RouterModule, MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',

})
export class HeaderComponent implements OnInit, OnDestroy {
  dateTime: Date;
  user: IUser;
  logoutIcon = 'pi pi-user';
  loginIcon = 'pi pi-sign-in';
  isMenuOpen = false;

  menuItems: MenuItem[] = [
    {
      label: 'Главная',
      routerLink: ['/'],
    },
    {
      label: 'Туры',
      routerLink: ['/tours'],
    },
    {
      label: 'Настройки',
      routerLink: ['/settings'],
    },
    {
      label: 'Заказы',
      routerLink: ['/orders'],
    }
  ];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.user = this.userService.getUser();

    setInterval(() => {
      this.dateTime = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {}

  logout(): void {
    this.userService.setUser(null);
    this.router.navigate(['/auth']);
  }

  hoverLogoutBtn(val: boolean): void { 
    if (this.user?.login) {

    this.logoutIcon = val ? 'pi pi-sign-in' : 'pi pi-user'
    } else {
      
      this.logoutIcon = val ? 'pi pi-sign-out' : 'pi pi-user';
    }
  }


  toggleMenu() {
    console.log("hello")
    this.isMenuOpen = !this.isMenuOpen;
  }
}
