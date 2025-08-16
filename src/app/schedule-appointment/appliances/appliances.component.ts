import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'appliances',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './appliances.component.html'
})
export class AppliancesComponent {

  @Input({required: true}) appliancesForm: any;


}
