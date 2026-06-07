import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'appliances',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './appliances.component.html'
})
export class AppliancesComponent {

  @Input({required: true}) appliancesForm: any;


}
