import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '', component: NotFoundComponent,
  }
];



@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
