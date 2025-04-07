import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { LayoutComponent } from './layout/layout.component';
import { ToursComponent } from './pages/tours/tours.component';
import { TourItemComponent } from './pages/tour-item/tour-item.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFound404Component } from './pages/not-found-404/not-found-404.component';
import { authGuard } from './shared/guards/auth.guard';
import { SettingsComponent } from './pages/settings/settings.component';
import { PasswordChangeComponent } from './pages/settings/password-change/password-change.component';
import { StatisticComponent } from './pages/settings/statistic/statistic.component';
 

export const routes: Routes = [
    { path: "auth", component: AuthComponent},
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
        { path: "", component: ToursComponent, data: {showAside: true}},
        { path: "tour/:id", component: TourItemComponent},
        { path: "tour", redirectTo: '', pathMatch: 'full'},
        { path: "settings",
            canActivate: [authGuard],
            component: SettingsComponent,
            children: [
            { path: "", redirectTo: 'password-change', pathMatch: 'full'},
            { path: "password-change", component: PasswordChangeComponent},
            { path: "statistics", component: StatisticComponent, data: {showAside: true}}
        ]},
    ]},
    { path: "**", component: NotFound404Component},

];


    // { path: "", redirectTo: '/auth', pathMatch: 'full'},
    // { path: "", redirectTo: '/tours', pathMatch: 'full'},