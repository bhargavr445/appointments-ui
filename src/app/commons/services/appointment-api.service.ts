import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { format } from 'date-fns/format';
import { ScheduledTimeSlotsApiResponseI } from '../interfaces/api-response';
import { CheckAvailableDatesI } from '../interfaces/slotI';


@Injectable()
export class AppointmentApiService {

  http = inject(HttpClient);

  selectedDate = signal(format(new Date(), "MM/dd/yyyy"));

  availableSlotsForSelectedDate = httpResource<string[]>(() => ({
    url: `checkIfAppointIsAlreadySchedudForToday?date=${this.selectedDate()}`,
    method: 'GET',
  }),
    //`checkIfAppointIsAlreadySchedudForToday?date=${this.selectedDate()}`
    {
      defaultValue: [],
      parse: (data: ScheduledTimeSlotsApiResponseI) => data.data.map((time: CheckAvailableDatesI) => time.appointmentTime)
    }
  );

  scheduleAppointment(payload) {
    return this.http.post('schedule', payload);
  }
}


