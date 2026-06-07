import { Router, Routes, UrlTree } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PinComponent } from './pin/pin.component';
import { inject } from '@angular/core';
import { PinService } from './pin/pin.service';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'confirm', loadComponent: () => import('./confirmation/confirmation.component').then(c => c.ConfirmationComponent) },
    { path: 'about', loadComponent: () => import('./about/about.component').then(c => c.AboutComponent) },
    { path: 'junk', loadComponent: () => import('./junk/junk.component').then(c => c.JunkComponent) },
    { path: 'faq', loadComponent: () => import('./faq/faq.component').then(c => c.FaqComponent) },
    { path: 'schedule/:type', loadComponent: () => import('./schedule-appointment/schedule-appointment.component').then(c => c.ScheduleAppointmentComponent) },
    {
        path: 'admin',
        loadComponent: () => import('./admin/admin.component').then(c => c.AdminComponent),
        children: [
            { path: '', redirectTo: () => inject(PinService).getEmployeeInfo()?.pin ? 'date-search' : 'pin', pathMatch: 'full' },
            { path: 'pin', component: PinComponent },
            { path: 'email-search', canMatch: [() => checkPin()], loadComponent: () => import('./admin/email-search/email-search.component').then(c => c.EmailSearchComponent) },
            { path: 'date-search', canMatch: [() => checkPin()], loadComponent: () => import('./admin/date-search/date-search.component').then(c => c.DateSearchComponent) },
        ]
    },
    
];

function checkPin(): boolean | UrlTree {
    const pinService = inject(PinService);
    const router = inject(Router);
 return pinService.getEmployeeInfo()?.pin ? true : router.parseUrl('home');
}
