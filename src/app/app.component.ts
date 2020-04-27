import { Component } from '@angular/core';

import {
  faFacebookF, faTelegram, faFacebookMessenger, faBitbucket, faGithub
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

  socialIcons = [faFacebookF, faFacebookMessenger, faTelegram, faBitbucket, faGithub, faEnvelope];
}
