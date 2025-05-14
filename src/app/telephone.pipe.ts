import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telephone'
})
export class TelephonePipe implements PipeTransform {

  transform(telephone: string | number): string {
    if (!telephone || telephone === '0') {
      return '';
    }

    const value = telephone.toString().trim();

    // If it contains non-digits, return as-is
    if (/\D/.test(value)) {
      return value;
    }

    // Format if it's 10-digit
    if (value.length === 10) {
      return `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6)}`;
    }

    return value;
  }

}
