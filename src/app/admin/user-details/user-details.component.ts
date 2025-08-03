import { Component, input } from '@angular/core';
import { UserDetailsBasedOnDateI } from '../../commons/interfaces/userI';
import { ScheduleTimerComponent } from "../../commons/components/schedule-timer/schedule-timer.component";

@Component({
  selector: 'user-details',
  imports: [ScheduleTimerComponent],
  templateUrl: './user-details.component.html'
})
export class UserDetailsComponent {

  userDetailsList = input.required< UserDetailsBasedOnDateI[]>();

}
