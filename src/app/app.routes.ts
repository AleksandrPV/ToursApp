import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { LayoutComponent } from './layout/layout.component';
import { ToursComponent } from './pages/tours/tours.component';
import { TourItemComponent } from './pages/tour-item/tour-item.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFound404Component } from './pages/not-found-404/not-found-404.component';
import { authGuard } from './shared/guards/auth.guard';


export const routes: Routes = [

{ path: "",
    canActivate: [authGuard],
    component: LayoutComponent,
     children: [
    { path: "", component: HomeComponent},
]},
{ path: "tours", 
    canActivate: [authGuard],
    component: LayoutComponent,
    children: [
    { path: "", component: ToursComponent},
    { path: "tour/:id", component: TourItemComponent},
    { path: "tour", redirectTo: '', pathMatch: 'full'},
]},
{ path: "auth", component: AuthComponent},
{ path: "**", component: NotFound404Component},

];


    // { path: "", redirectTo: '/auth', pathMatch: 'full'},
    // { path: "", redirectTo: '/tours', pathMatch: 'full'},