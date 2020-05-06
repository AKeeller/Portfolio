import { Component } from '@angular/core';

import { Social } from '../social';
import { About } from '../about';

import {
  faFacebookF, faTelegramPlane, faFacebookMessenger, faBitbucket, faGithub, faPaypal
} from '@fortawesome/free-brands-svg-icons';

import {
  faEnvelope, faAddressCard, faTerminal
} from '@fortawesome/free-solid-svg-icons';

import about from 'html-loader!../../assets/about.html';
import code from 'html-loader!../../assets/code.html';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  
  socials: Social[] = [
    { icon: faFacebookF, link: "https://www.facebook.com/AKeeller" },
    { icon: faFacebookMessenger, link: "http://m.me/AKeeller" },
    { icon: faTelegramPlane, link: "https://t.me/AKeeller" },
    { icon: faBitbucket, link: "https://bitbucket.org/AKeeller/" },
    { icon: faGithub, link: "https://github.com/AKeeller" },
    { icon: faPaypal, link: "https://www.paypal.me/AlbertoAmoruso" },
    { icon: faEnvelope, link: "mailto:alberto.am@me.com" }
  ];

  abouts: About[] = [
    { icon: faAddressCard, title: "About", content: about },
    { icon: faTerminal, title: "Code", content: code }
  ];

}
