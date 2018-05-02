import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

/**
 * Generated class for the WorkoutsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html',
})
export class WorkoutsPage {

  exercises: Array<any>;
  total: number;

  /* 
  * Same premise as the book cart we created for class, save to local storage
  * create a custom workout for the user
  * or track a current workout
  * allows for leaving the page and returning to the saved workout
  */
  
  constructor(public modalCtrl: ModalController) { 
    let storageData = window.localStorage.getItem("exercises");
     if (storageData != null) {
         this.exercises = JSON.parse(storageData);
     } else {
    		this.exercises = [
	        {title: 'Back Squat', qty: 5, set: 1, weight: 315},
	        {title: 'Competition Bench', qty: 5, set: 1, weight: 250},
	        {title: 'RDL', qty: 8, set: 1, weight: 225}
	      ]; 	
     }
  }
  ngOnInit() {
  }

   removeExercise(index: number) {
  	this.exercises.splice(index, 1);
  }

  addExercise() {
  	let newexercise: any = {title : 'New Exercise', qty : 1, set: 1, weight : 100};
    this.exercises.push(newexercise);
  }

  saveWorkout() {
  	window.localStorage.setItem("exercises", JSON.stringify(this.exercises));
  }

  updateTotal(): number {
  	this.total = 0;
    for (var i = 0; i < this.exercises.length; i++) {
        this.total += this.exercises[i].qty * this.exercises[i].weight;
    }
    return this.total;
  }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }
}


/* template for modal popup weekly workouts */
@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Workout Description
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-list>
      <ion-item>
        <ion-avatar item-start>
        </ion-avatar>
        <h2>{{exercise.name}}</h2>
        <p>{{exercise.quote}}</p>
      </ion-item>

      <ion-item *ngFor="let item of exercise['items']">
      {{item.title}}
        <ion-note item-end>
          {{item.note}} 
        </ion-note>
        
      </ion-item>
      <ion-item>
      <ion-label floating>Notes:</ion-label>
      <ion-input type="text"></ion-input>
    </ion-item>
  </ion-list>
  <ion-footer>
  <ion-toolbar>
<ion-item>
      <ion-label>Finished</ion-label>
      <ion-toggle color="secondary"></ion-toggle>
    </ion-item>
  </ion-toolbar>
</ion-footer>
</ion-content>
`
})
export class ModalContentPage {
  exercise;

// current working set of weekly workouts for use in modal template 

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var exercise = [
      {
        name: 'Powerlifting Basics',
        quote: 'Lower reps, Heavier weight, longer rest times',
        image: 'assets/img/avatar-gollum.jpg',
        items: [
          { title: 'Back Squat', note: '5x5@8RPE' },
          { title: 'Competition Bench', note: '5x5@7RPE' },
          { title: 'High Bar Squat', note: '4x8@8RPE' }
        ]
      },
      {
        name: 'Muscular Endurance',
        quote: 'Higher reps, lower weight, shorter rest times',
        image: 'assets/img/avatar-frodo.jpg',
        items: [
          { title: 'Lunges', note: '4x10' },
          { title: 'Touch n Go Bench', note: '3x12' },
          { title: 'Lateral Raises', note: '4x12' },
          { title: 'Overhead Press', note: '3x7' }
        ]
      },
      {
        name: 'Circuit Crush',
        quote: '3 rounds, 12 reps per exercise, as quickly as possible with good form',
        image: 'assets/img/avatar-samwise.jpg',
        items: [
          { title: 'Push-ups', note: '' },
          { title: 'Box Jumps', note: '' },
          { title: 'Side Lunge', note: '' },
          { title: 'Cable Row', note: '' }
        ]
      }
    ];
    this.exercise = exercise[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  
}
