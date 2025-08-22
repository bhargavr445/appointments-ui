import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./landing-page/footer/footer.component";
import { HeaderComponent } from "./landing-page/header/header.component";
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  template: `
      <app-header />
      <div class="main_routing_section">
        <router-outlet />
      </div>
      <app-footer />
  `
})
export class AppComponent {

}
