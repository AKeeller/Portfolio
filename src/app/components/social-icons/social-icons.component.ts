import { Component } from '@angular/core';

import {
  faFacebookF, faTelegramPlane, faFacebookMessenger, faGithub, faPaypal
} from '@fortawesome/free-brands-svg-icons';

import {
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

import { faStadia } from 'src/app/fontawesome/custom-icons/icons';

@Component({
  selector: 'social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.css']
})
export class SocialIconsComponent {

  socials = [
    { icon: faFacebookF, link: "https://www.facebook.com/AKeeller" },
    { icon: faStadia, link: "https://stadia.com/profile/16863763696130835909" },
    { icon: faFacebookMessenger, link: "http://m.me/AKeeller" },
    { icon: faTelegramPlane, link: "https://t.me/AKeeller" },
    { icon: faGithub, link: "https://github.com/AKeeller" },
    { icon: faPaypal, link: "https://www.paypal.me/AlbertoAmoruso" },
    { icon: faEnvelope, link: "mailto:alberto@amoruso.dev" }
  ];

}
