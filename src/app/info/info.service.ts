import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  formValues = signal({});
  formValueChanges = computed(() => this.formValues())


  setFormValues(key:string, formData) {
    this.formValues.update((previousValues) => ({...previousValues, [key]: formData}));
  }
}
