import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PinService } from '../pin/pin.service';
import { metaData } from '../commons/constants/app.constants';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-admin',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
  <div class="info_container moving_container">
    @if(enteredPin()) {
        <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link" routerLink="/admin/date-search" routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }">
        Date
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" routerLink="/admin/email-search" routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }">
        Email
      </a>
    </li>
  </ul>
    }
  <!-- Tab content area -->
  <div class="mt-3">
    <router-outlet></router-outlet>
  </div>
</div>`
})
export class AdminComponent {

  #pinService = inject(PinService);
  enteredPin = computed(() => this.#pinService.computedEmployeeInfo()?.pin);

}
