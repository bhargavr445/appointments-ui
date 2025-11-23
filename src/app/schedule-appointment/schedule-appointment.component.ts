import { NgClass } from '@angular/common';
import { Component, computed, inject, input as RouteInput, OnDestroy, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { addDays, format } from 'date-fns';
import { map, Subject, takeUntil } from 'rxjs';
import { TimePickerComponent } from "../commons/components/time-picker/time-picker.component";
import { dateFormatter, ISODateFormatter } from '../commons/constants/app.constants';
import * as I from '../commons/interfaces/AppointmentDetailsI';
import { AppointmentApiService } from '../commons/services/appointment-api.service';
import { PhoneNumberMaskDirective } from '../phone-number-mask.directive';
import { TelephonePipe } from '../telephone.pipe';
import { ServiceTypeList } from '../commons/data/reference-data';
import { ApartmentTypeComponent } from "./apartment-type/apartment-type.component";
import { FurnitureComponent } from './furniture/furniture.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { ElectronicsComponent } from "./electronics/electronics.component";
import { BoxesComponent } from "./boxes/boxes.component";
import { SpecialItemsComponent } from "./special-items/special-items.component";

@Component({
  selector: 'app-schedule-appointment',
  imports: [FormsModule, ReactiveFormsModule, FurnitureComponent, AppliancesComponent,
    TimePickerComponent, NgClass, PhoneNumberMaskDirective, ApartmentTypeComponent, ElectronicsComponent, BoxesComponent, SpecialItemsComponent],
  templateUrl: './schedule-appointment.component.html',
  styleUrl: './schedule-appointment.component.scss',
  providers: [AppointmentApiService]
})
export class ScheduleAppointmentComponent implements OnInit, OnDestroy {

  appointmentApiService = inject(AppointmentApiService);
  type = RouteInput.required<AppointmentType>();
  engagedSlotsList = computed(() => this.appointmentApiService.availableSlotsForSelectedDate.value());
  engagedSlotsListIsLoading = computed(() => this.appointmentApiService.availableSlotsForSelectedDate.isLoading());
  appointmentForm: FormGroup;
  minDate = format(addDays(new Date(), 0),ISODateFormatter);
  scheduleApointmentApiProgress = signal(false);
  scheduleAppointmentError = signal('');
  unsubscribe = new Subject();
  servicesList = ServiceTypeList;

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
      movingFrom: this.#movingForm(),
      movingTo: this.#movingForm(),
      serviceType: new FormControl(this.type(), { nonNullable: true, validators: [Validators.required] }),
      note: new FormControl('', { nonNullable: true }),
      appointment: this.#appointForm(),
      currentAddress: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      newAddress: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      furniture: new FormGroup({
        numberOfFurniturePieces: new FormControl('', { nonNullable: true, validators: [Validators.required] }), // number 
        listOfLargeItems: new FormControl('', { nonNullable: true, validators: [Validators.required] }) //text
      }),
      appliances: new FormGroup({
        numberOfLargeAppliances: new FormControl('', { nonNullable: true, validators: [Validators.required] }) // number
      }),
      electronics: new FormGroup({
        numberOfTvs: new FormControl(null , { nonNullable: true, validators: [Validators.required] }), //number
        numberOfMonitorsAndComputers: new FormControl('',  { nonNullable: true, validators: [Validators.required] }), // number
        otherElectronics: new FormControl('',  { nonNullable: true, validators: [Validators.required] }),
      }),
      boxes: new FormGroup({
        noOfBoxes: new FormControl(null , { nonNullable: true, validators: [Validators.required] }),
        // fragile: new FormControl('',  { nonNullable: true, validators: [Validators.required] })
      }),
      specialItems: new FormGroup({
        largeOrHeavyItems: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      })
    })
  }

  #addressForm() {
    return new FormGroup({
      line1: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      line2: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      state: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      city: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      zip: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    })
  }

  #movingForm() {
    return new FormGroup<I.ApartmentTypeI>({
      apartmentType: new FormControl('', { nonNullable: true, validators: [Validators.required] })
    })
  }

  #appointForm() {
    return new FormGroup<I.ApointmentSlotI>({
      date: new FormControl(format(new Date(), ISODateFormatter), { nonNullable: true, validators: [Validators.required] }),
      time: new FormControl('', { nonNullable: true, validators: [Validators.required] })
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
    console.log(this.appointmentForm);

    if (this.appointmentForm.valid) {
      this.scheduleApointmentApiProgress.set(true);
      const payload: I.AppointmentScheduleI = this.appointmentForm.getRawValue();
      payload.appointment.date = this.#dateFormatter(payload.appointment.date);
      payload.email = payload.email.toLocaleLowerCase();
      this.appointmentApiService.scheduleAppointment(payload).subscribe({
        next: (response) => this.#afterSchedulingApointment(response),
        error: (error) => this.#handleError(error)
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

export type AppointmentType = 'j' | 'm';