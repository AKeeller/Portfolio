import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

import {
  faFacebookF, faTelegramPlane, faFacebookMessenger, faBitbucket, faGithub, faPaypal
} from '@fortawesome/free-brands-svg-icons';

import {
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

interface Social {
  icon: IconDefinition;
  link: string;
}

@Component({
  selector: 'social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.css']
})
export class SocialIconsComponent {

  socials: Social[] = [
    { icon: faFacebookF, link: "https://www.facebook.com/AKeeller" },
    { icon: faFacebookMessenger, link: "http://m.me/AKeeller" },
    { icon: faTelegramPlane, link: "https://t.me/AKeeller" },
    { icon: faBitbucket, link: "https://bitbucket.org/AKeeller/" },
    { icon: faGithub, link: "https://github.com/AKeeller" },
    { icon: faPaypal, link: "https://www.paypal.me/AlbertoAmoruso" },
    { icon: faEnvelope, link: "mailto:alberto.am@me.com" }
  ];

}
