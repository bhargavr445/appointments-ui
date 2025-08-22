import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'electronics',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './electronics.component.html'
})
export class ElectronicsComponent {

  @Input() electronicsForm: any;

}
