import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScheduleAppointmentComponent } from "../schedule-appointment/schedule-appointment.component";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-junk',
  imports: [ScheduleAppointmentComponent],
  templateUrl: './junk.component.html'
})
export class JunkComponent {

}
