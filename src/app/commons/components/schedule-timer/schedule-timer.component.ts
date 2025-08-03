import { Component, computed, input } from '@angular/core';
import { timeSlots } from '../../constants/app.constants';

@Component({
  selector: 'app-schedule-timer',
  imports: [],
  template: `<span>{{derivedLabel().label}}</span>`
})
export class ScheduleTimerComponent {

  slots = timeSlots;
  time = input.required();
  derivedLabel = computed(() => this.deriveLabel(this.time()))

  deriveLabel(incomingTime) {
    return this.slots.find((slot) => slot.value == incomingTime);
  }
}
