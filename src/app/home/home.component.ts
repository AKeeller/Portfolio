import { Component } from '@angular/core';

import { Social } from '../social';

import {
  faFacebookF, faTelegramPlane, faFacebookMessenger, faBitbucket, faGithub, faPaypal
} from '@fortawesome/free-brands-svg-icons';

import {
  faEnvelope, faAddressCard, faTerminal, faFileUpload, faHammer
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
  faHammer = faHammer;
  
  socials: Social[] = [
    { icon: faFacebookF, link: "https://www.facebook.com/AKeeller" },
    { icon: faFacebookMessenger, link: "http://m.me/AKeeller" },
    { icon: faTelegramPlane, link: "https://t.me/AKeeller" },
    { icon: faBitbucket, link: "https://bitbucket.org/AKeeller/" },
    { icon: faGithub, link: "https://github.com/AKeeller" },
    { icon: faPaypal, link: "https://www.paypal.me/AlbertoAmoruso" },
    { icon: faEnvelope, link: "mailto:alberto.am@me.com" }
  ];

  get age() {
    const birthdate = new Date('1994-08-20');
    const diff = Date.now() - birthdate.getTime();
    return Math.floor( diff / 1000 / 60 / 60 / 24 / 365.25 );
  }

}