import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule)
  },
  {
    path:'**',
    loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // WebsiteRoutingModule,
    // SharedRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
