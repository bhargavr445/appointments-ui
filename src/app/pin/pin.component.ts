import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalComponent } from "../commons/components/modal/modal.component";
import { EmployeeResponseI } from '../commons/interfaces/api-response';
import { PinService } from './pin.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-pin',
  imports: [ReactiveFormsModule, ModalComponent],
  templateUrl: './pin.component.html'
})
export class PinComponent {

  #pinService = inject(PinService);
  #router = inject(Router);

  isOpen = signal<boolean>(true);
  pinControl = new FormControl('', [Validators.required]);

  close(event) {
    this.isOpen.set(false);
    this.#router.navigate(['/']);
  }

  continueToAdminSection() {
    this.#pinService.getEmployeeByPin(this.pinControl.getRawValue()).subscribe(
      (response: EmployeeResponseI) => {
        this.#pinService.setEmployeeInfo(response.data);
        this.#router.navigate(['admin/date-search']);
      },
      (error) => {
        this.#pinService.setEmployeeInfo(null);
        this.#router.navigate(['home']);
      }
    )
  }

}
