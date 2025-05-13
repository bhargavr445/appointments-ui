import { Component, computed, input } from '@angular/core';
import { timeSlots } from '../../constants/app.constants';

@Component({
  selector: 'app-schedule-timer',
  imports: [],
  templateUrl: './schedule-timer.component.html',
  styleUrl: './schedule-timer.component.scss'
})
export class ScheduleTimerComponent {

  slots = timeSlots;
  time = input.required();
  derivedLabel = computed(() => this.deriveLabel(this.time()))

  deriveLabel(incomingTime) {
    return this.slots.find((slot) => slot.value == incomingTime);
  }
}
