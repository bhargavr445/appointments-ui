import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './landing-page/header/header.component';
import { FooterComponent } from './landing-page/footer/footer.component';
import { JunkServicesComponent } from "./landing-page/junk-services/junk-services.component";
import { MovingServicesComponent } from "./landing-page/moving-services/moving-services.component";
import { LocationComponent } from './landing-page/location/location.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, JunkServicesComponent, MovingServicesComponent, LocationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'appointments-ui';
}
