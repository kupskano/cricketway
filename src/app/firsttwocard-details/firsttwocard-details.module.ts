import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirsttwocardDetailsPageRoutingModule } from './firsttwocard-details-routing.module';

import { FirsttwocardDetailsPage } from './firsttwocard-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirsttwocardDetailsPageRoutingModule
  ],
  declarations: [FirsttwocardDetailsPage]
})
export class FirsttwocardDetailsPageModule {}
