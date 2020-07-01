import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailspageComponent } from './detailspage/detailspage.component';

const routes: Routes = [{
  path: 'productdetails', component: DetailspageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
