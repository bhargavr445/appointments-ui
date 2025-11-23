import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseFormComponent } from './base-form/base-form.component';
import { FormGroup } from '@angular/forms';
import { InfoService } from './info.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-info',
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent extends BaseFormComponent {

  infoService = inject(InfoService);
  formValues = this.infoService.formValueChanges;
  keys = computed(() => Object.keys(this.formValues()));

  constructor() {
    super();
    this.infoForm.valueChanges.subscribe(d => console.log(d));
  }

}
