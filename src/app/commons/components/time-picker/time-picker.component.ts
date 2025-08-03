import { Component, input, linkedSignal, output } from '@angular/core';
import { timeSlots } from '../../constants/app.constants';
import { format, parseISO, startOfDay, isEqual } from 'date-fns';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-time-picker',
  imports: [NgClass],
  templateUrl: './time-picker.component.html',
  styleUrl: './time-picker.component.scss'
})
export class TimePickerComponent {

  slots = timeSlots;
  selectedDate =  input.required<string>();
  bookedSlots = input.required();
  availableSlots = linkedSignal(() => this.deriveAvailableSlots(this.bookedSlots()));
  selectedTimeEmitter = output();
  touchedEmitter = output();

  deriveAvailableSlots(bookedSlots) {
    console.log(bookedSlots);
    
    const updatedArray = this.slots.map(slot => ({ 
      ...slot, 
      isAvailable: !bookedSlots.includes(String(slot.value)) && this.#checkIfTimeIsPast(slot)
    }));
    return updatedArray;
  }

  #checkIfTimeIsPast(slot) {
    const parsedSelectedDate = startOfDay(parseISO(this.selectedDate()));
    const todaysDate = startOfDay(new Date());
    const hour = format(new Date(), 'HH');
    // if selected date and todays date is equal then check for time. 
    if (isEqual(todaysDate, parsedSelectedDate)) {
      return hour < slot.fullHours;
    } else {
      return true
    }
  }

  selectSlot(item) {
    this.availableSlots.update(slots => slots.map(slot => ({...slot, isSelected: slot.value == item.value})));
    this.selectedTimeEmitter.emit(item.value);
  }

  elementTouched() {
    this.touchedEmitter.emit();
  }

}
