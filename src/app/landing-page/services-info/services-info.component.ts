import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { metaData } from '../../commons/constants/app.constants';

@Component({
  selector: 'app-services-info',
  imports: [RouterLink],
  templateUrl: './services-info.component.html',
  styleUrl: './services-info.component.scss'
})
export class ServicesInfoComponent {

    appConstants = metaData;
  

}
