import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'furniture',
  imports: [ReactiveFormsModule, FormsModule, NgClass],
  templateUrl: './furniture.component.html'
})
export class FurnitureComponent {

  @Input({required: true}) furnitureForm: any;

}
