import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'special-items',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './special-items.component.html'
})
export class SpecialItemsComponent {

  @Input({required: true}) specialItemsForm: any;

}
