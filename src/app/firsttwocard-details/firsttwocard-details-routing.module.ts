import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirsttwocardDetailsPage } from './firsttwocard-details.page';

const routes: Routes = [
  {
    path: '',
    component: FirsttwocardDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirsttwocardDetailsPageRoutingModule {}
