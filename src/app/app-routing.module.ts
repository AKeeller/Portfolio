import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { CodingComponent } from './sections/coding/coding.component'


const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'HomePage'} },
  { path: 'about-me', component: AboutMeComponent, data: {animation: 'AboutPage'} },
  { path: 'projects', component: ProjectsComponent },
  { path: 'coding', component: CodingComponent, data: {animation: 'CodingPage'} },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
