import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalTrainersPage } from './personal-trainers';

@NgModule({
  declarations: [
    PersonalTrainersPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalTrainersPage),
  ],
})
export class PersonalTrainersPageModule {}
