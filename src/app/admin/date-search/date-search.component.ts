import { Component, computed, inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { addDays, format } from 'date-fns';
import { map } from 'rxjs';
import { dateFormatter, ISODateFormatter } from '../../commons/constants/app.constants';
import { AdminApiService } from '../../commons/services/admin-api.service';
import { UserDetailsComponent } from "../user-details/user-details.component";

@Component({
  selector: 'app-date-search',
  imports: [FormsModule, ReactiveFormsModule, UserDetailsComponent],
  templateUrl: './date-search.component.html',
  providers: [AdminApiService],
})
export class DateSearchComponent implements OnInit, OnDestroy {

  adminApiService = inject(AdminApiService);
  date = new FormControl(format(new Date(), ISODateFormatter));
  minDate = format(addDays(new Date(), 0), ISODateFormatter);
  userDetailsList = computed(() => this.adminApiService.fetchAppointmentsByDateResource.value()?.data);
  userDetailsListLoading = computed(() => this.adminApiService.fetchAppointmentsByDateResource.isLoading());
  selectedDate = '';

  ngOnInit(): void {
    this.adminApiService.setDate();
    this.date.valueChanges.pipe(map(v => this.#dateFormatter(v))).subscribe((v) => {
      this.selectedDate = v;
    });
  }

  preventTyping(event: KeyboardEvent): void {
    event.preventDefault();
  }

  #dateFormatter(dateStr: string): string {
    const [year, month, day] = dateStr.split('-').map(Number);
    const localDate = new Date(year, month - 1, day); // Month is 0-based
    const formattedDate = format(localDate, dateFormatter);
    return formattedDate;
  }

  searchByDate(): void {
    this.adminApiService.date.set(this.selectedDate);
  }

  ngOnDestroy(): void {
    this.adminApiService.resetDate();
  }

}
