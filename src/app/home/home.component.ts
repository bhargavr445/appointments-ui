import { Component } from '@angular/core';
import { HeaderComponent } from "../landing-page/header/header.component";
import { ServicesInfoComponent } from "../landing-page/services-info/services-info.component";

@Component({
  selector: 'app-home',
  imports: [ServicesInfoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


}
