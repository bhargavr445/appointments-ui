import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-confirmation',
  imports: [],
  template: `
    <div class="alert alert-success mar-l-r-20 mar-t-100" role="alert">
  🎉 “Thanks! We'll review your info and contact you shortly with your custom quote.”
  </div>
  `
})
export class ConfirmationComponent {

}
