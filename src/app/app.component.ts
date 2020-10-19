import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router'

import { fadeInOutAnimation } from './animations'

@Component({
  selector: 'app-root',
  template: '<div [@fadeInOut]="prepareRoute(outlet)"><router-outlet #outlet="outlet"></router-outlet></div>',
  animations: [fadeInOutAnimation]
})

export class AppComponent implements OnInit {

  constructor(private meta: Meta) { }

  ngOnInit() {
    window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
      this.setColorScheme(e.matches ? 'dark' : 'light');
    })
  }

  setColorScheme(scheme: 'dark' | 'light') {
    if (scheme == 'dark')
      this.meta.updateTag({ name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' });
    else
      this.meta.updateTag({ name: 'apple-mobile-web-app-status-bar-style', content: 'default' });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}