import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GymFinderPage } from './gym-finder';

@NgModule({
  declarations: [
    GymFinderPage,
  ],
  imports: [
    IonicPageModule.forChild(GymFinderPage),
  ],
})
export class GymFinderPageModule {}
