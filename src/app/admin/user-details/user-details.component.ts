import { Component, input } from '@angular/core';
import { UserDetailsBasedOnDateI } from '../../commons/interfaces/userI';
import { ScheduleTimerComponent } from "../../commons/components/schedule-timer/schedule-timer.component";
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'user-details',
  imports: [ScheduleTimerComponent, UpperCasePipe],
  templateUrl: './user-details.component.html'
})
export class UserDetailsComponent {

  userDetailsList = input.required< UserDetailsBasedOnDateI[]>();

}
