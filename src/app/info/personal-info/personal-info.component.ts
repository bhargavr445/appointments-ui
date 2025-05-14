import { Component, inject } from '@angular/core';
import { BaseFormComponent } from '../base-form/base-form.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-personal-info',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss'
})
export class PersonalInfoComponent extends BaseFormComponent {

  infoService = inject(InfoService);
  router = inject(Router);

  personalInfo = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  })

  constructor() {
    super();
    this.infoForm.addControl('info', this.personalInfo)
  }

  navigateTo(path: string) {
    this.infoService.setFormValues('personalInfo', this.personalInfo.getRawValue());
    this.router.navigate([`info/${path}`]);
  }

}
