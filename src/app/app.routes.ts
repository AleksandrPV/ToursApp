import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { LayoutComponent } from './layout/layout.component';
import { ToursComponent } from './pages/tours/tours.component';
import { TourItemComponent } from './pages/tours/tour-item/tour-item.component';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [

{ path: "", component: LayoutComponent, children: [
    { path: "", component: HomeComponent},
    { path: "tours", component: ToursComponent, children: [
        { path: "", component: ToursComponent},
        { path: "tour/:id", component: TourItemComponent},
        { path: "tour/", redirectTo: '', pathMatch: 'full'},
    ]},
]},
{ path: "auth", component: AuthComponent},
{ path: "**", redirectTo: '/tours', pathMatch: 'full'}

];


    // { path: "", redirectTo: '/auth', pathMatch: 'full'},
    // { path: "", redirectTo: '/tours', pathMatch: 'full'},