import { Component } from '@angular/core'

import {
  faTelegramPlane, faGithub, faPaypal
} from '@fortawesome/free-brands-svg-icons'

import {
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.css']
})
export class SocialIconsComponent {

  socials = [
    { icon: faTelegramPlane, link: "https://t.me/AKeeller" },
    { icon: faGithub, link: "https://github.com/AKeeller" },
    { icon: faPaypal, link: "https://www.paypal.me/AlbertoAmoruso" },
    { icon: faEnvelope, link: "mailto:alberto@amoruso.dev" }
  ]

}
