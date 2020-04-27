import { Component } from '@angular/core';

import {
  faFacebook, faTwitter, faTelegram, faFacebookMessenger
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

  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faTelegram = faTelegram;
  faFacebookMessenger = faFacebookMessenger;
  faEnvelope = faEnvelope;
}
