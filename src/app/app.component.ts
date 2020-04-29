import { Component } from '@angular/core';

import { Social } from './social';
import { About } from './about';

import {
  faFacebookF, faTelegramPlane, faFacebookMessenger, faBitbucket, faGithub, faPaypal
} from '@fortawesome/free-brands-svg-icons';

import {
  faEnvelope, faAddressCard
} from '@fortawesome/free-solid-svg-icons';

import about from 'html-loader!../assets/about.html';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Personal-Website';

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
    { icon: faAddressCard, path: '../assets/about.txt', title: "About", content: about }
  ];

}
