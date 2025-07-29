import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'furniture',
  imports: [ReactiveFormsModule, FormsModule, NgClass],
  templateUrl: './furniture.component.html',
  styleUrl: './furniture.component.scss'
})
export class FurnitureComponent {

  @Input({required: true}) furnitureForm: any;

}
