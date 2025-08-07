import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'confirm', component: ConfirmationComponent },
    { path: 'about', loadComponent: () => import('./about/about.component').then(c => c.AboutComponent) },
    { path: 'junk', loadComponent: () => import('./junk/junk.component').then(c => c.JunkComponent) },
    { path: 'faq', loadComponent: () => import('./faq/faq.component').then(c => c.FaqComponent) },
    { path: 'schedule/:type', loadComponent: () => import('./schedule-appointment/schedule-appointment.component').then(c => c.ScheduleAppointmentComponent) },
    // {
    //     path: 'info',
    //     loadComponent: () => import('./info/info.component').then(c => c.InfoComponent),
    //     children: [
    //         { path: '', redirectTo: 'primary', pathMatch: 'full' },
    //         { path: 'primary', loadComponent: () => import('./info/personal-info/personal-info.component').then(c => c.PersonalInfoComponent) },
    //         { path: 'service', loadComponent: () => import('./info/services/services.component').then(c => c.ServicesComponent) },
    //         { path: 'location', loadComponent: () => import('./info/location/location.component').then(c => c.LocationComponent) }
    //     ]
    // },
    {
        path: 'admin',
        loadComponent: () => import('./admin/admin.component').then(c => c.AdminComponent),
        children: [
            { path: '', redirectTo: 'date-search', pathMatch: 'full' },
            { path: 'email-search', loadComponent: () => import('./admin/email-search/email-search.component').then(c => c.EmailSearchComponent) },
            { path: 'date-search', loadComponent: () => import('./admin/date-search/date-search.component').then(c => c.DateSearchComponent) },
        ]
    }
];
