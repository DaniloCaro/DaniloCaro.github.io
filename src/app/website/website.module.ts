// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Components
import { HomeComponent } from './pages/home/home.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { SocialMediaGridComponent } from './templates/social-media-grid/social-media-grid.component';

@NgModule({
  declarations: [
    HomeComponent,
    SocialMediaComponent,
    SocialMediaGridComponent
  ],
  imports: [
    BrowserModule
  ]
})
export class WebsiteModule { }
