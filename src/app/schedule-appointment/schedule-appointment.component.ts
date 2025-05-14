import { NgClass } from '@angular/common';
import { Component, computed, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { addDays, format } from 'date-fns';
import { map, Subject, takeUntil } from 'rxjs';
import { TimePickerComponent } from "../commons/components/time-picker/time-picker.component";
import { dateFormatter, ISODateFormatter } from '../commons/constants/app.constants';
import * as I from '../commons/interfaces/AppointmentDetailsI';
import { AppointmentApiService } from '../commons/services/appointment-api.service';
import { PhoneNumberMaskDirective } from '../phone-number-mask.directive';
import { TelephonePipe } from '../telephone.pipe';

@Component({
  selector: 'app-schedule-appointment',
  imports: [FormsModule, ReactiveFormsModule, TimePickerComponent, NgClass, PhoneNumberMaskDirective],
  templateUrl: './schedule-appointment.component.html',
  styleUrl: './schedule-appointment.component.scss',
  providers: [AppointmentApiService]
})
export class ScheduleAppointmentComponent implements OnInit, OnDestroy {

  appointmentApiService = inject(AppointmentApiService);
  engagedSlotsList = computed(() => this.appointmentApiService.availableSlotsForSelectedDate.value());
  engagedSlotsListIsLoading = computed(() => this.appointmentApiService.availableSlotsForSelectedDate.isLoading());
  appointmentForm: FormGroup;
  minDate = format(addDays(new Date(), 0),ISODateFormatter);
  scheduleApointmentApiProgress = signal(false);
  scheduleAppointmentError = signal('');
  unsubscribe = new Subject();

  ngOnInit(): void {
    this.#createForm();
    this.appointmentForm.get('appointment.date').valueChanges.pipe(
      map(v => this.#dateFormatter(v)),
      takeUntil(this.unsubscribe)
    ).subscribe((v) => {
      this.appointmentApiService.selectedDate.set(v)
    });
  }

  #dateFormatter(dateStr: string): string {
    const [year, month, day] = dateStr.split('-').map(Number);
    const localDate = new Date(year, month - 1, day); // Month is 0-based
    const formattedDate = format(localDate, dateFormatter);
    return formattedDate;
  }

  #createForm(): void {
    this.appointmentForm = new FormGroup<I.AppointmentScheduleFormI>({
      firstName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      lastName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      email: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      phoneNumber: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      note: new FormControl('', { nonNullable: true}),
      appointment: new FormGroup<I.ApointmentSlotI>({
        date: new FormControl(format(new Date(), ISODateFormatter), { nonNullable: true, validators: [Validators.required] }),
        time: new FormControl('', { nonNullable: true, validators: [Validators.required] })
      })
    })
  }

  selectedTime(event): void {
    this.appointmentForm.get('appointment.time').setValue(event);
  }

  onPhoneNumber() {
    this.appointmentForm.get('phoneNumber').setValue(new TelephonePipe().transform(this.appointmentForm.get('phoneNumber').value))
  }

  scheduleAppointment(): void {
    this.scheduleAppointmentError.set('');
    console.log(this.appointmentForm.getRawValue());
    
    if (this.appointmentForm.valid) {
      this.scheduleApointmentApiProgress.set(true);
      const payload: I.AppointmentScheduleI = this.appointmentForm.getRawValue();
      payload.appointment.date = this.#dateFormatter(payload.appointment.date);
      payload.email = payload.email.toLocaleLowerCase();
      this.appointmentApiService.scheduleAppointment(payload).subscribe({
        next: (response) => this.#afterSchedulingApointment(response),
        error: (error) =>  this.#handleError(error) 
      })
    } else {
      this.appointmentForm.markAllAsTouched();
    }
  }

  #handleError(error): void {
    this.scheduleApointmentApiProgress.set(false);
    if (error?.status == 409) {
      this.scheduleAppointmentError.set(error?.error?.message);
    } else {
      this.scheduleAppointmentError.set('Failed to create Appointment for Technical Reasons. Please try later.');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  #afterSchedulingApointment(_): void {
    this.appointmentApiService.availableSlotsForSelectedDate.reload();
    this.appointmentForm.reset();
    this.scheduleApointmentApiProgress.set(false);
  }

  touchedEvent(): void {
    if (!this.appointmentForm.get('appointment.time').touched) {
      this.appointmentForm.get('appointment.time').markAsTouched({ emitEvent: true });
    }
  }

  preventTyping(event: KeyboardEvent): void {
    event.preventDefault();
  }

  closeAlert(): void {
    this.scheduleAppointmentError.set('');
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(true);
    this.unsubscribe.complete();
  }

}
