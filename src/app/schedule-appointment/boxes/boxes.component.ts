import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'boxes',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './boxes.component.html'
})
export class BoxesComponent {

  @Input() boxesForm: any;

  aptValues = [
    { label: 'Yes', value: true },
    { label: 'No', value: false },
  ];

  onCheckboxChange(value: boolean) {
    console.log(value);
    if (value) {
      this.#addDescControl();
    } else {
      this.#removeDescControl();
    }
    console.log(this.boxesForm);
  }

  #addDescControl() {
    this.boxesForm.addControl('fragileItemsDesc', new FormControl(''));
  }

  #removeDescControl() {
    this.boxesForm.removeControl('fragileItemsDesc')
  }

}
