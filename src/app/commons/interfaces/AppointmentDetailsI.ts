import { FormControl, FormGroup } from "@angular/forms";

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
    appointment: FormGroup<ApointmentSlotI>
  }
  
  export interface ApointmentSlotI {
    date: FormControl<string>
    time: FormControl<string>
  }