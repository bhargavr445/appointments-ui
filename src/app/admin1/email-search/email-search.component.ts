import { Component, computed, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScheduleTimerComponent } from "../../commons/components/schedule-timer/schedule-timer.component";
import { AdminApiService } from '../../commons/services/admin-api.service';

@Component({
  selector: 'app-email-search',
  imports: [FormsModule, ReactiveFormsModule, ScheduleTimerComponent],
  templateUrl: './email-search.component.html',
  styleUrl: './email-search.component.scss',
  providers: [AdminApiService]
})
export class EmailSearchComponent {

  adminApiService = inject(AdminApiService);
  email = new FormControl('');
  selectedEmailRecord = computed(() => this.adminApiService.fetchAppointmentsByEmailResource.value()?.data);

  searchByEmail(): void {
    this.adminApiService.email.set(this.email.getRawValue());
  }

}
