import { Routes } from '@angular/router';
import { ScheduleAppointmentComponent } from './schedule-appointment/schedule-appointment.component';

export const routes: Routes = [
    { path: '', redirectTo: 'schedule', pathMatch: 'full' },
    { path: 'schedule', component: ScheduleAppointmentComponent },
    {
        path: 'admin', loadComponent: () => import('./admin1/admin.component').then(c => c.AdminComponent), children: [
            { path: '', redirectTo: 'date-search', pathMatch: 'full' },
            { path: 'email-search', loadComponent: () => import('./admin1/email-search/email-search.component').then(c => c.EmailSearchComponent) },
            { path: 'date-search', loadComponent: () => import('./admin1/date-search/date-search.component').then(c => c.DateSearchComponent) },
        ]
    }
];
