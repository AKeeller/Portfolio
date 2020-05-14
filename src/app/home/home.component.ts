import { Component } from '@angular/core';

import {
  faAddressCard, faTerminal, faFileUpload
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  faAddressCard = faAddressCard;
  faTerminal = faTerminal;
  faFileUpload = faFileUpload;

  get age() {
    const birthdate = new Date('1994-08-20');
    const diff = Date.now() - birthdate.getTime();
    return Math.floor( diff / 1000 / 60 / 60 / 24 / 365.25 );
  }

}