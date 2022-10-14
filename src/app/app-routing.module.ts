import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 70],
};

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
    RouterModule.forRoot(routes,routerOptions),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
