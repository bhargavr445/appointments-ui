import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, linkedSignal, model, output } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-modal',
  imports: [NgStyle],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  isOpen = model.required<boolean>();
  isOpneL = linkedSignal(this.isOpen);
  close = output();

  onClose() {
    this.isOpneL.set(false);
    this.close.emit();
  }

}
