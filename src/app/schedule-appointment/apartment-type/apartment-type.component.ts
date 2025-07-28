import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'apartment-type',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './apartment-type.component.html',
  styleUrl: './apartment-type.component.scss'
})
export class ApartmentTypeComponent {

  @Input({ required: true }) apartmentTypeForm: any;
  floorsList = [];

  constructor() {
    this.addFloorNumbers(20);
  }

  housingTypes = [
    { label: 'Apartment', value: 'APT' },
    { label: 'Independent House', value: 'IND' },
    { label: 'Basement Suite', value: 'SUITE' }
  ];

  aptValues = [
    { label: 'Yes', value: true },
    { label: 'No', value: false },
  ];

  onCheckboxChange(selectedOption): void {
    if (selectedOption === 'APT') {
      this.apartmentTypeForm.addControl('elevator', new FormControl());
      this.apartmentTypeForm.addControl('floorNumber', new FormControl());
    } else {
      this.apartmentTypeForm.removeControl('elevator');
      this.apartmentTypeForm.removeControl('floorNumber');
    }
  }

  addFloorNumbers(maxFloors) {
    for (let index = 0; index < maxFloors; index++) {
      this.floorsList.push(index+1);
      
    }
  }

}
