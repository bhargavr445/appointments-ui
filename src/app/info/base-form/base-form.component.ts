import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  imports: [FormsModule, ReactiveFormsModule],
  template: ``,
})
export class BaseFormComponent {
  infoForm = new FormGroup({});
}
