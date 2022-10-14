import { AppRoutingModule } from './../../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { HeaderComponent } from './header/header.component';
import { SocialMediaGridComponent } from './social-media-grid/social-media-grid.component';
import { SocialMediaComponent } from '../components/social-media/social-media.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SocialMediaGridComponent,
    SocialMediaComponent,
    FooterComponent,
    ContactComponent

  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    ContactComponent,
    FooterComponent
  ]
})
export class HeaderModule { }
