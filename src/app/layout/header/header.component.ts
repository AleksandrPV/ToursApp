
import { DatePipe } from '@angular/common';
import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '../../models/IUser';
import { MenuItem } from 'primeng/api';
import { UserService } from '../../services/user.service';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Menubar, MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { ITour } from '../../models/ITour';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-header',
  imports: [ DatePipe, 
    MenubarModule,
    ButtonModule, 
    RouterModule, 
    MenubarModule, 
    OverlayBadgeModule, 
    AsyncPipe ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',

})
export class HeaderComponent implements OnInit, OnDestroy {
  dateTime: Date;
  user: IUser;
  logoutIcon = 'pi pi-user';
  loginIcon = 'pi pi-sign-in';
  isMenuOpen = false;
  basketStore$: Observable<ITour[]> = null;


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
      routerLink: ['settings'],
    },
    {
      label: 'Заказы',
      routerLink: ['/orders'],
    }
  ];

  constructor(
    private userService: UserService,
    private router: Router,
    private ngZone: NgZone,
    private basketService: BasketService
  ) {}

  
  ngOnInit() {

    this.basketStore$ = this.basketService.basketStore$;

    this.user = {"login": sessionStorage.getItem('login')};
    
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.dateTime = new Date();
      }, 1000);
    })

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
