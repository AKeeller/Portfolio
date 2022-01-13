import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeCustomIconsModule } from './fontawesome.module';
import { ChapterComponent } from './components/chapter/chapter.component';

import { SocialIconsComponent } from './components/social-icons/social-icons.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { BigTitleComponent } from './components/big-title/big-title.component';
import { RatingComponent } from './components/rating/rating.component';
import { CodingComponent } from './sections/coding/coding.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChapterComponent,
    SocialIconsComponent,
    ProjectsComponent,
    BigTitleComponent,
    RatingComponent,
    CodingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    FontAwesomeCustomIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
