import { Component } from '@angular/core';

import { Social } from './social';
import { About } from './about';

import {
  faFacebookF, faTelegramPlane, faFacebookMessenger, faBitbucket, faGithub, faPaypal
} from '@fortawesome/free-brands-svg-icons';

import {
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

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
    { icon: faFacebookF, path: '../assets/about.txt', title: "About", content: null }
  ];

  constructor() {
    for (const about of this.abouts) {
      this.loadContent(about);
    }
  }

  getFile = async (file: string)=> {
    const response = await fetch(file);
    return await response.text();
  }

  loadContent(about: About) {
    this.getFile(about.path).then(value => {
      about.content = value;
    }).catch(_ => {
      console.log('error loading ' + about.path);
    });
  }

}
