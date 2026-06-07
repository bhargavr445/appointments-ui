import { ChangeDetectionStrategy, Component } from '@angular/core';
import { metaData } from '../../commons/constants/app.constants';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  appConstants = metaData;


}
