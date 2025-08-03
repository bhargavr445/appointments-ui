import { Component } from '@angular/core';
import { ServicesInfoComponent } from "../landing-page/services-info/services-info.component";

@Component({
  selector: 'app-home',
  imports: [ServicesInfoComponent],
  template: `<app-services-info/>`
})
export class HomeComponent {

}
