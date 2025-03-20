import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { LayoutComponent } from './layout/layout.component';
import { ToursComponent } from './pages/tours/tours.component';

export const routes: Routes = [

{ path: "auth", component: AuthComponent},
{ path: "", redirectTo: '/auth', pathMatch: 'full'},
{ path: "tours", component: LayoutComponent, children: [
    { path: "", component: ToursComponent},
    // { path: "tours/", redirectTo: '', pathMatch: 'full'},
    // { path: "tours/:id", component: TourItemComponent},
]},
{ path: "**", redirectTo: '/auth', pathMatch: 'full'}

];
