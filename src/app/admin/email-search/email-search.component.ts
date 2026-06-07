import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminApiService } from '../../commons/services/admin-api.service';
import { UserDetailsComponent } from "../user-details/user-details.component";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-email-search',
  imports: [FormsModule, ReactiveFormsModule, UserDetailsComponent],
  templateUrl: './email-search.component.html',
  providers: [AdminApiService]
})
export class EmailSearchComponent {

  #adminApiService = inject(AdminApiService);
  email = new FormControl('');
  selectedEmailRecord = computed(() => this.#adminApiService.fetchAppointmentsByEmailResource.value()?.data);
  userDetailsListLoading = computed(() => this.#adminApiService.fetchAppointmentsByEmailResource.isLoading());

  searchByEmail(): void {
    this.#adminApiService.email.set(this.email.getRawValue());
  }

}
