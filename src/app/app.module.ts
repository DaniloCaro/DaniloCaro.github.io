import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
// Submodules
import { HeaderModule } from './shared/templates/header.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
