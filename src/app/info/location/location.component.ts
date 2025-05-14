import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseFormComponent } from '../base-form/base-form.component';
import { InfoService } from '../info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent extends BaseFormComponent {

  infoService = inject(InfoService);
  router = inject(Router);

  location = new FormGroup({
    city: new FormControl(),
    zip: new FormControl()
  })

  constructor() {
    super();
    this.infoForm.addControl('location', this.location);
  }

  navigateTo(path: string) {
    this.infoService.setFormValues('location',this.location.getRawValue());
    this.router.navigate([`info/${path}`]);
  }

}
