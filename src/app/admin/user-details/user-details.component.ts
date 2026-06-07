import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { UserDetailsBasedOnDateI } from '../../commons/interfaces/userI';
import { ScheduleTimerComponent } from "../../commons/components/schedule-timer/schedule-timer.component";
import { TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'user-details',
  imports: [ScheduleTimerComponent, UpperCasePipe, TitleCasePipe],
  templateUrl: './user-details.component.html',
})
export class UserDetailsComponent {

  userDetailsList = input.required< UserDetailsBasedOnDateI[]>();

}
