import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'special-items',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './special-items.component.html',
  styleUrl: './special-items.component.scss'
})
export class SpecialItemsComponent {

  @Input({required: true}) specialItemsForm: any;

}
