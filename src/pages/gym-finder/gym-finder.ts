import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';

import { NavController, Platform  } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

declare let google;

/**
 * Generated class for the GymFinderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-gym-finder',
  templateUrl: 'gym-finder.html',
})
export class GymFinderPage {

  ngZone: any;
  @ViewChild('map') mapElement: ElementRef;
  map:any;
  latLng:any;
  markers:any;
  mapOptions:any;
  
  isM:any=500;
  isType:any="";

  constructor(private navCtrl: NavController,
  						private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap(){
/* get current location and display on map with latLng */
    this.geolocation.getCurrentPosition().then((position) => {

      this.latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      
      this.mapOptions = {
        center: this.latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }   

      this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);

    }, (err) => {
      alert('err '+err);
    });

  }

 /* Find Nearby Place */
  nearbyPlace(){
    this.loadMap();
    this.markers = [];
    let service = new google.maps.places.PlacesService(this.map);
    service.nearbySearch({
              location: this.latLng,
              radius: this.isM,
              types: [this.isType]
            }, (results, status) => {
                this.callback(results, status);
            });
  }

  callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        this.createMarker(results[i]);
      }
    }
  }

  /* create marker for place being searched */

  createMarker(place){
    var placeLoc = place;
    console.log('placeLoc',placeLoc)
    this.markers = new google.maps.Marker({
        map: this.map,
        position: place.geometry.location
    });

    let infowindow = new google.maps.InfoWindow();

    google.maps.event.addListener(this.markers, 'click', () => {
      this.ngZone.run(() => {
        infowindow.setContent(place.name);
        infowindow.open(this.map, this.markers);
      });
    });
  }
}