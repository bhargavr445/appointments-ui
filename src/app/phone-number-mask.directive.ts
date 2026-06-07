import { Directive, HostListener, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appPhoneNumberMask]',
  standalone: true,
})
export class PhoneNumberMaskDirective {

  constructor(@Optional() public ngControl: NgControl) {}

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event: any) {
    if (this.ngControl) {
      this.onInputChange(event);
    }
  }

  onInputChange(event: string) {
    let newVal = event.replace(/\D/g, '');

    if (newVal.length > 3 && newVal.length <= 6) {
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})/, '$1-$2');
    } else if (newVal.length > 6 && newVal.length <= 10) {
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '$1-$2-$3');
    }

    this.ngControl?.valueAccessor?.writeValue(newVal);
  }
}
