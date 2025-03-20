import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { LayoutComponent } from './layout/layout.component';
import { ToursComponent } from './pages/tours/tours.component';

export const routes: Routes = [

{ path: "auth", component: AuthComponent},
{ path: "", redirectTo: '/auth', pathMatch: 'full'},
{ path: "tickets", component: LayoutComponent, children: [
    { path: "", component: ToursComponent},
]},
{ path: "**", redirectTo: '/auth', pathMatch: 'full'}

];
