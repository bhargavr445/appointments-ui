import { httpResource } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { UserDetailsApiResponse, UserDetailsByAppointmentDate } from '../interfaces/api-response';
import { format } from 'date-fns';

@Injectable()
export class AdminApiService {

  email = signal('');
  date = signal(format(new Date(), "MM/dd/yyyy"));

  fetchAppointmentsByEmailResource = httpResource<UserDetailsApiResponse>(() => this.email() ? `http://localhost:3000/api/searchByEmail?email=${this.email()}`: undefined);

  fetchAppointmentsByDateResource = httpResource<UserDetailsByAppointmentDate>(() => this.date() ? `http://localhost:3000/api/searchAppointmentsByDate?date=${this.date()}`: undefined);
}




