import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';

// Submodules
// import { WebsiteModule } from './website/website.module';
// import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // WebsiteModule,
    // SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
