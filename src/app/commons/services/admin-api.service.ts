import { httpResource } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { UserDetailsApiResponse, UserDetailsByAppointmentDate } from '../interfaces/api-response';
import { format } from 'date-fns';

@Injectable()
export class AdminApiService {

  email = signal('');
  date = signal('');

  fetchAppointmentsByEmailResource = httpResource<UserDetailsByAppointmentDate>(() => this.email() ? `searchByEmail?email=${this.email()}`: undefined);

  fetchAppointmentsByDateResource = httpResource<UserDetailsByAppointmentDate>(() => this.date() ? `searchAppointmentsByDate?date=${this.date()}`: undefined);

  setDate() {
    this.date.set(format(new Date(), "MM/dd/yyyy"));
  }

  resetDate() {
    this.date.set('');
  }

}


