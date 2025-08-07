import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { StatusUpdateResponseI, UserDetailsApiResponse, UserDetailsByAppointmentDate } from '../interfaces/api-response';
import { format } from 'date-fns';
import { Observable } from 'rxjs';
import { Status } from '../interfaces/AppointmentDetailsI';

@Injectable()
export class AdminApiService {

  email = signal('');
  date = signal('');
  http = inject(HttpClient);

  fetchAppointmentsByEmailResource = httpResource<UserDetailsByAppointmentDate>(() => this.email() ? `searchByEmail?email=${this.email()}`: undefined);

  fetchAppointmentsByDateResource = httpResource<UserDetailsByAppointmentDate>(() => this.date() ? `searchAppointmentsByDate?date=${this.date()}`: undefined);

  setDate() {
    this.date.set(format(new Date(), "MM/dd/yyyy"));
  }

  resetDate() {
    this.date.set('');
  }

  updateStatus(_id: string, status: Status): Observable<StatusUpdateResponseI> {
    return this.http.put<StatusUpdateResponseI>('updateStatus', { _id, status });
  }

}


