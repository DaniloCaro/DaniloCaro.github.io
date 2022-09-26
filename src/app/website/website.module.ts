// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Services
import { ExperiencesService } from './services/experiences.service';
import { ProjectsService } from './services/projects.service';
// Components
import { HomeComponent } from './pages/home/home.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { SocialMediaGridComponent } from './templates/social-media-grid/social-media-grid.component';
import { HeroComponent } from './templates/hero/hero.component';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';
import { ExperienceComponent } from './templates/experience/experience.component';
import { MyprojectsComponent } from './templates/myprojects/myprojects.component';
import { ProjectInfoComponent } from './components/project-info/project-info.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './templates/header/header.component';
import { ContactComponent } from './templates/contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    SocialMediaComponent,
    SocialMediaGridComponent,
    HeroComponent,
    ExperienceCardComponent,
    ExperienceComponent,
    MyprojectsComponent,
    ProjectInfoComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ExperiencesService,
    ProjectsService
  ],
})
export class WebsiteModule { }
