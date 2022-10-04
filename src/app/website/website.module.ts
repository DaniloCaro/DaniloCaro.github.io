// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxTypedJsModule } from 'ngx-typed-js';
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
import { MenuComponent } from './components/menu/menu.component';
import { SkillTileComponent } from './components/skill-tile/skill-tile.component';
import { MyskillsComponent } from './templates/myskills/myskills.component';

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
    ContactComponent,
    MenuComponent,
    SkillTileComponent,
    MyskillsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxTypedJsModule
  ],
  providers: [
    ExperiencesService,
    ProjectsService
  ],
})
export class WebsiteModule { }
