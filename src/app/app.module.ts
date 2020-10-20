import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChapterComponent } from './home/about/chapter.component';
import { AboutMeComponent } from './home/more/about-me/about-me.component';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { ProjectsComponent } from './home/more/projects/projects.component';
import { BigTitleComponent } from './home/about/big-title.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChapterComponent,
    AboutMeComponent,
    SocialIconsComponent,
    ProjectsComponent,
    BigTitleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
