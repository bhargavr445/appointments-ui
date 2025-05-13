
export interface UserDetails {
  _id: string;
  email: string;
  __v: number;
  createdAt: Date;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  updatedAt: Date;
}

export interface Appointment {
  date: string;
  time: string;
  status: string;
  _id: string;
}

export interface UserDetailsBasedOnEmail extends UserDetails {
  appointments: Appointment[];
}

export interface UserDetailsBasedOnDateI extends UserDetails {
  appointments: Appointment;
}
