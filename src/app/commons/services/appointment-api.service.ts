import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { format } from 'date-fns/format';
import { ScheduledTimeSlotsApiResponseI } from '../interfaces/api-response';
import { SlotI } from '../interfaces/slotI';


@Injectable()
export class AppointmentApiService {

  http = inject(HttpClient);

  selectedDate = signal(format(new Date(), "MM/dd/yyyy"));

  availableSlotsForSelectedDate = httpResource<string[]>(() => ({
    url: `checkIfAppointIsAlreadySchedudForToday?date=${this.selectedDate()}`,
    method: 'GET',
  }),
    { 
      defaultValue: [], 
      parse: (data: ScheduledTimeSlotsApiResponseI) => {
        const allocatedTimeSlots: SlotI[] = data.data.filter((slot: SlotI) => slot.status === 'confirmed');
        const timeList = allocatedTimeSlots.map((slot: SlotI) => slot.time);
        return timeList
      }
    }
  );

  scheduleAppointment(payload) {
    return this.http.post('schedule', payload);
  }
}


