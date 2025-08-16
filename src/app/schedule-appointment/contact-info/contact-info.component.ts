import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TelephonePipe } from '../../telephone.pipe';
import { PhoneNumberMaskDirective } from '../../phone-number-mask.directive';

@Component({
  selector: 'contact-info',
  imports: [ReactiveFormsModule, NgClass, PhoneNumberMaskDirective],
  templateUrl: './contact-info.component.html'
})
export class ContactInfoComponent {

  @Input() contactInfoForm: any;

    onPhoneNumber() {
    this.contactInfoForm.get('phoneNumber').setValue(new TelephonePipe().transform(this.contactInfoForm.get('phoneNumber').value))
  }

}
