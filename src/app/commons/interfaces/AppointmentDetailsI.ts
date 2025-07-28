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
  
  export interface AppointmentScheduleFormI {
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    email: FormControl<string>;
    phoneNumber: FormControl<string>;
    note: FormControl<string>;
    serviceType: FormControl<AppointmentType>;
    appointment: FormGroup<ApointmentSlotI>;
    movingFrom: FormGroup<ApartmentTypeI>;
    movingTo: FormGroup<ApartmentTypeI>;
  }

  export interface ApartmentTypeI {
    apartmentType: FormControl<string>;
    elevator?: FormControl<boolean>;
    floorNumber?: FormControl<number>;
  }
  
  export interface ApointmentSlotI {
    date: FormControl<string>
    time: FormControl<string>
  }