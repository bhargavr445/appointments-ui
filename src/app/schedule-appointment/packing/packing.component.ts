import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'packing',
  imports: [ReactiveFormsModule],
  template: `
  <label class="fw-bold d-block mb-2">Do you need help with packing?</label>
  <div class="d-flex gap-3">
    @for (option of aptValues; track option) {
    <div class="form-check form-check-inline">
      <input 
        class="form-check-input" 
        type="radio" 
        [id]="option.value" 
        [value]="option.value"
        [formControl]="packingHelp" />
      <label class="form-check-label ms-1" [for]="option.value">
        {{ option.label }}
      </label>
    </div>
    }
  </div>`
})
export class PackingComponent {

  @Input({ required: true }) packingHelp: any;

    aptValues = [
    { label: 'Yes', value: true },
    { label: 'No', value: false },
  ];

}
