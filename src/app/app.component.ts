import { Component, OnInit } from '@angular/core';
import { TrainService } from './services/train.service';
import { PayloadClass, Train } from './models/Payload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'WhatTrainIsClose';
  trains: Train[];
  lat;
  lng;

  constructor(private trainService: TrainService) {
  }

  ngOnInit(): void {
    this.getUserPosition();
    this.getTrainsData();
  }

  getUserPosition()
  {
    navigator.geolocation.getCurrentPosition(resp => {
        this.lat = resp.coords.latitude;
        this.lng = resp.coords.longitude;
        console.log({lng: resp.coords.longitude, lat: resp.coords.latitude});
      },
      err => {
        console.warn(err);
      });

  }

  getTrainsData() {
    this.trainService.getTrains(this.lat, this.lng).subscribe(
      data => {
        this.trains = data.payload.treinen;
      }
    );
  }
}
