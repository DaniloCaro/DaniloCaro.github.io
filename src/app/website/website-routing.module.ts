import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
// Components
import { HomeComponent } from './pages/home/home.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', redirectTo: '', pathMatch: 'full' },
    ]
  },
  {
    path: 'project/:title',
    component: ProjectPageComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
