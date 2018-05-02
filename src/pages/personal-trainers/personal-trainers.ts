import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactFormPage } from '../../pages/contact-form/contact-form';

/**
 * Generated class for the PersonalTrainersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal-trainers',
  templateUrl: 'personal-trainers.html',
})
export class PersonalTrainersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  contact() {
    this.navCtrl.setRoot(ContactFormPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalTrainersPage');
  }

}
