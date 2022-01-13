import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'

import { fadeInOutAnimation } from './animations'

@Component({
  selector: 'app-root',
  template: '<div [@fadeInOut]="prepareRoute(outlet)"><router-outlet #outlet="outlet"></router-outlet></div>',
  animations: [fadeInOutAnimation]
})

export class AppComponent {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}