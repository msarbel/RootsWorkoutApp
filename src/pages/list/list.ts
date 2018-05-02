import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  // array for youtube video list
  videos: any[] = [
    {
      title: 'Back Squat',
      video: 'https://www.youtube.com/embed/e5FbyMzSTAY'
    },
    {
      title: 'Deadlift',
      video: 'https://www.youtube.com/embed/RpBHbCFcUe4'
    },
    {
      title: 'Bench',
      video: 'https://www.youtube.com/embed/N4Zy9X4l09M'
    },

  ]
  
 
  constructor(public navCtrl: NavController, private http: Http) {
   
   
  }
 
 
}
