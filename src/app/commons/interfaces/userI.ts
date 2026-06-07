
export interface UserDetails {
  _id: string;
  email: string;
  __v: number;
  createdAt: Date;
  firstName: string;
  lastName: string;
  serviceType: string;
  phoneNumber: string;
  updatedAt: Date;
  note: string;
  status: string;
  appointmentTime: string;
  appointmentDate: string;
  appliances: { numberOfLargeAppliances: number};
  boxes: {noOfBoxes: number, containsFragileItems: boolean, fragileItemsDesc: string};
  specialItems: {largeOrHeavyItems: string};
  currentAddress: string;
  newAddress: string;
  packingHelp: boolean;
  electronics: {
    numberOfMonitorsAndComputers: number
                numberOfTvs: number
                otherElectronics: string,
  }
  furniture: {numberOfFurniturePieces: number,
                listOfLargeItems: string,}
  movingFrom: {
    floorNumber?: number,
                apartmentType: string,
                elevator?: boolean,
  };
  movingTo: {
    floorNumber?: number,
                apartmentType: string,
                elevator?: boolean,
  }



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
