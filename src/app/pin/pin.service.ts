import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { EmployeeI } from '../commons/interfaces/employee';
import { EmployeeResponseI } from '../commons/interfaces/api-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PinService {

  #http = inject(HttpClient);
  #employeeInfo = signal<EmployeeI>(null);
  computedEmployeeInfo = computed(() => this.#employeeInfo());

  setEmployeeInfo(info: EmployeeI) {
    this.#employeeInfo.set(info);
  }

  getEmployeeInfo(): EmployeeI {
    return this.#employeeInfo();
  }

  getEmployeeByPin(pin: string): Observable<EmployeeResponseI> {
    return this.#http.post<EmployeeResponseI>('fetchEmployeeByPin', {pin});
  }

}
