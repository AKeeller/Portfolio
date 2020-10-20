import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChapterComponent } from './components/chapter/chapter.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SocialIconsComponent } from './components/social-icons/social-icons.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { BigTitleComponent } from './components/big-title/big-title.component';
import { RatingComponent } from './components/rating/rating.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChapterComponent,
    AboutMeComponent,
    SocialIconsComponent,
    ProjectsComponent,
    BigTitleComponent,
    RatingComponent
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
