import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ServicesInfoComponent } from "../landing-page/services-info/services-info.component";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-home',
  imports: [ServicesInfoComponent],
  template: `<app-services-info/>`
})
export class HomeComponent {

}
