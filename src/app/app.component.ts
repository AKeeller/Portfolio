import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
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

}