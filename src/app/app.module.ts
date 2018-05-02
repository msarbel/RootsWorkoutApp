
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Modal } from 'ionic-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GymFinderPage } from '../pages/gym-finder/gym-finder';
import { WorkoutsPage } from '../pages/workouts/workouts';
import { PersonalTrainersPage } from '../pages/personal-trainers/personal-trainers';
import { ModalContentPage } from '../pages/workouts/workouts';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';

import { HttpModule } from '@angular/http';
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'Highcharts'
import { ContactFormPage } from '../pages/contact-form/contact-form';
import { YoutubePipe } from '../pipes/youtube/youtube';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    GymFinderPage,
    WorkoutsPage,
    PersonalTrainersPage,
    ModalContentPage,
    ContactFormPage,
    YoutubePipe

  ],
  imports: [
    BrowserModule,
    HttpModule,
    ChartModule.forRoot(highcharts),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    GymFinderPage,
    WorkoutsPage,
    PersonalTrainersPage,
    ModalContentPage,
    ContactFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
