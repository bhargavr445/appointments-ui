import { FormControl, FormGroup } from "@angular/forms";
import { AppointmentType } from "../../schedule-appointment/schedule-appointment.component";

export interface AppointmentScheduleI {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    note: string;
    appointment: {
      date: string
      time: string
    }
  }

  export type Status = 'Confirm' | 'Canceled' | 'Done';
  
  export interface AppointmentScheduleFormI {
    contactInfo: FormGroup<ContactInfoControlsI>;
    note: FormControl<string>;
    serviceType: FormControl<AppointmentType>;
    appointment: FormGroup<ApointmentSlotI>;
    movingFrom?: FormGroup<ApartmentTypeI>;
    movingTo?: FormGroup<ApartmentTypeI>;
    furniture?:  FormGroup<any>;
    appliances?:  FormGroup<any>;
    electronics?:  FormGroup<any>;
    boxes?:  FormGroup<any>;
    specialItems?:  FormGroup<any>;
    currentAddress: FormControl<string>;
    newAddress?: FormControl<string>;
    packingHelp?: FormControl<boolean>;
  }

  export interface ContactInfoControlsI {
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    email: FormControl<string>;
    phoneNumber: FormControl<string>;
  }

  export interface AddressInfoI {
    line1: FormControl<string>;
    line2: FormControl<string>;
    state: FormControl<string>;
    city: FormControl<string>;
    zip: FormControl<string>;
  }

  export interface ApartmentTypeI {
    apartmentType: FormControl<string>;
    elevator?: FormControl<boolean>;
    floorNumber?: FormControl<number>;
  }
  
  export interface ApointmentSlotI {
    date: FormControl<string>
    // time: FormControl<string>
  }