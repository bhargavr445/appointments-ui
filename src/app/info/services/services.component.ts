import { Component, inject } from '@angular/core';
import { BaseFormComponent } from '../base-form/base-form.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoService } from '../info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent extends BaseFormComponent {

  infoService = inject(InfoService);
  router = inject(Router);
  service = new FormGroup({
    serviceType: new FormControl('')
  })

  constructor() {
    super()
    this.infoForm.addControl('service', this.service);
  }

  navigateTo(path: string) {
    this.infoService.setFormValues('service', this.service.getRawValue());
    this.router.navigate([`info/${path}`]);
  }

}
