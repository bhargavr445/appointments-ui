import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'electronics',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './electronics.component.html'
})
export class ElectronicsComponent {

  @Input() electronicsForm: any;

}
