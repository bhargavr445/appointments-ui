import { SlotI } from "./slotI";
import { UserDetailsBasedOnDateI, UserDetailsBasedOnEmail } from "./userI";

export interface ApiResponseI<T> {
    data: T;
    status: number
}

export type UserDetailsApiResponse = ApiResponseI<UserDetailsBasedOnEmail>;
export type UserDetailsByAppointmentDate = ApiResponseI<UserDetailsBasedOnDateI[]>;
export type ScheduledTimeSlotsApiResponseI = ApiResponseI<SlotI[]>;


