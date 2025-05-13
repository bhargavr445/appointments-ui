import { Component, input, linkedSignal, output } from '@angular/core';
import { timeSlots } from '../../constants/app.constants';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-time-picker',
  imports: [NgClass],
  templateUrl: './time-picker.component.html',
  styleUrl: './time-picker.component.scss'
})
export class TimePickerComponent {

  slots = timeSlots;
  bookedSlots = input.required();
  availableSlots = linkedSignal(() => this.deriveAvailableSlots(this.bookedSlots()));
  selectedTimeEmitter = output();
  touchedEmitter = output();

  deriveAvailableSlots(bookedSlots) {
    const updatedArray = this.slots.map(slot => ({ ...slot, isAvailable: !bookedSlots.includes(String(slot.value)) }));
    return updatedArray;
  }

  selectSlot(item) {
    this.availableSlots.update(slots => slots.map(slot => ({...slot, isSelected: slot.value == item.value})));
    this.selectedTimeEmitter.emit(item.value);
  }

  elementTouched() {
    this.touchedEmitter.emit();
  }

}
