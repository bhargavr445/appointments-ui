import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'boxes',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './boxes.component.html',
  styleUrl: './boxes.component.scss'
})
export class BoxesComponent {

  @Input() boxesForm: any;

}
