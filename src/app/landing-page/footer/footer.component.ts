import { Component } from '@angular/core';
import { metaData } from '../../commons/constants/app.constants';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  appConstants = metaData;


}
