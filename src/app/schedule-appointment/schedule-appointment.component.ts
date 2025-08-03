import { NgClass } from '@angular/common';
import { Component, computed, inject, OnDestroy, OnInit, input as RouteInput, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { addDays, format } from 'date-fns';
import { map, Subject, takeUntil } from 'rxjs';
import { TimePickerComponent } from "../commons/components/time-picker/time-picker.component";
import { dateFormatter, ISODateFormatter } from '../commons/constants/app.constants';
import { ServiceTypeList } from '../commons/data/reference-data';
import * as I from '../commons/interfaces/AppointmentDetailsI';
import { AppointmentApiService } from '../commons/services/appointment-api.service';
import { ApartmentTypeComponent } from "./apartment-type/apartment-type.component";
import { AppliancesComponent } from './appliances/appliances.component';
import { BoxesComponent } from "./boxes/boxes.component";
import { ContactInfoComponent } from "./contact-info/contact-info.component";
import { ElectronicsComponent } from "./electronics/electronics.component";
import { FurnitureComponent } from './furniture/furniture.component';
import { PackingComponent } from "./packing/packing.component";
import { SpecialItemsComponent } from "./special-items/special-items.component";

@Component({
  selector: 'app-schedule-appointment',
  imports: [
    FormsModule, ReactiveFormsModule, FurnitureComponent, AppliancesComponent,
    TimePickerComponent, NgClass,
    ApartmentTypeComponent, ElectronicsComponent, BoxesComponent,
    SpecialItemsComponent, PackingComponent,
    ContactInfoComponent
  ],
  templateUrl: './schedule-appointment.component.html',
  providers: [AppointmentApiService]
})
export class ScheduleAppointmentComponent implements OnInit, OnDestroy {

  appointmentApiService = inject(AppointmentApiService);
  #router = inject(Router);
  type = RouteInput.required<AppointmentType>();
  engagedSlotsList = computed(() => this.appointmentApiService.availableSlotsForSelectedDate.value());
  engagedSlotsListIsLoading = computed(() => this.appointmentApiService.availableSlotsForSelectedDate.isLoading());
  appointmentForm: FormGroup;
  minDate = format(addDays(new Date(), 0), ISODateFormatter);
  scheduleApointmentApiProgress = signal(false);
  scheduleAppointmentError = signal('');
  unsubscribe = new Subject();
  servicesList = ServiceTypeList;
  removeControls = [
    'specialItems',
    'boxes',
    'electronics',
    'appliances',
    'furniture',
    'movingFrom',
    'movingTo',
  ];

  ngOnInit(): void {
    this.#createForm();
    this.appointmentForm.get('appointment.date').valueChanges.pipe(
      map(v => this.#dateFormatter(v)),
      takeUntil(this.unsubscribe)
    ).subscribe((v) => {
      this.appointmentApiService.selectedDate.set(v)
    });
  }

  onServiceTypeChange(event: Event): void {
    const serviceType = event.target['value'];
    this.#addControlsBasedOnServiceType(serviceType)
  }

  #dateFormatter(dateStr: string): string {
    const [year, month, day] = dateStr.split('-').map(Number);
    const localDate = new Date(year, month - 1, day); // Month is 0-based
    const formattedDate = format(localDate, dateFormatter);
    return formattedDate;
  }

  #createForm(): void {
    this.appointmentForm = new FormGroup<I.AppointmentScheduleFormI>({
      contactInfo: this.#contactInfoForm(),
      serviceType: new FormControl(this.type(), { nonNullable: true, validators: [Validators.required] }),
      note: new FormControl('', { nonNullable: true }),
      appointment: this.#appointForm(),
      currentAddress: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      packingHelp: new FormControl(true, { nonNullable: true, validators: [Validators.required] }),
      newAddress: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    })
    this.#addControlsBasedOnServiceType(this.type());
  }

  #setFurniture(): FormGroup<any> {
    return new FormGroup({
      numberOfFurniturePieces: new FormControl('', { nonNullable: true, validators: [Validators.required] }), // number 
      listOfLargeItems: new FormControl('', { nonNullable: true, validators: [Validators.required] })
    });
  }

  #setAppliances(): FormGroup<any> {
    return new FormGroup({
      numberOfLargeAppliances: new FormControl('', { nonNullable: true, validators: [Validators.required] })
    });
  }

  #setElectronicsControls(): FormGroup<any> {
    return new FormGroup({
      numberOfTvs: new FormControl(null, { nonNullable: true, validators: [Validators.required] }), //number
      numberOfMonitorsAndComputers: new FormControl('', { nonNullable: true, validators: [Validators.required] }), // number
      otherElectronics: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    });
  }

  #addControlsBasedOnServiceType(type: AppointmentType): void {
    if (type === 'm') {
      this.#addMovingControls();
    } else {
      this.#removeControls();
    }
  }

  #removeControls(): void {
    this.removeControls.forEach(controlName => this.appointmentForm.removeControl(controlName));
  }

  #addMovingControls(): void {
    this.appointmentForm.addControl('specialItems', this.#setSpecialItems());
    this.appointmentForm.addControl('boxes', this.#setBoxes());
    this.appointmentForm.addControl('electronics', this.#setElectronicsControls());
    this.appointmentForm.addControl('appliances', this.#setAppliances());
    this.appointmentForm.addControl('furniture', this.#setFurniture());
    this.appointmentForm.addControl('movingFrom', this.#movingForm());
    this.appointmentForm.addControl('movingTo', this.#movingForm());
  }

  #setBoxes(): FormGroup<any> {
    return new FormGroup({
      noOfBoxes: new FormControl(null, { nonNullable: true, validators: [Validators.required] }),
      // fragile: new FormControl('',  { nonNullable: true, validators: [Validators.required] })
    })
  }

  #setSpecialItems(): FormGroup<any> {
    return new FormGroup({
      largeOrHeavyItems: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    })
  }

  #contactInfoForm(): FormGroup<I.ContactInfoControlsI> {
    return new FormGroup({
      firstName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      lastName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      email: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      phoneNumber: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
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

  #movingForm(): FormGroup<any> {
    return new FormGroup<I.ApartmentTypeI>({
      apartmentType: new FormControl('', { nonNullable: true, validators: [Validators.required] })
    })
  }

  #appointForm(): FormGroup<any> {
    return new FormGroup<I.ApointmentSlotI>({
      date: new FormControl(format(new Date(), ISODateFormatter), { nonNullable: true, validators: [Validators.required] }),
      time: new FormControl('', { nonNullable: true, validators: [Validators.required] })
    })
  }

  selectedTime(event): void {
    this.appointmentForm.get('appointment.time').setValue(event);
  }


  scheduleAppointment(): void {
    this.scheduleAppointmentError.set('');
    console.log(this.appointmentForm.getRawValue());
    console.log(this.appointmentForm);

    if (this.appointmentForm.valid) {
      this.scheduleApointmentApiProgress.set(true);
      const payload: I.AppointmentScheduleI = { ...this.appointmentForm.getRawValue(), ...this.appointmentForm.getRawValue().contactInfo };
      payload.appointment.date = this.#dateFormatter(payload.appointment.date);
      payload.email = payload.email.toLocaleLowerCase();
      delete payload['contactInfo'];
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
    this.#router.navigate(['confirm']);
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