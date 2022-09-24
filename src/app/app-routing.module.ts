import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Submodules
import { WebsiteRoutingModule } from './website/website-routing.module';
import { SharedRoutingModule } from './shared/shared-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    WebsiteRoutingModule,
    SharedRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
