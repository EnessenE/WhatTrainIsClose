import { Component, OnInit } from '@angular/core';
import { Train } from 'src/app/models/Payload';
import { TrainService } from 'src/app/services/train.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'WhatTrainIsClose';
  trains: Train[];
  lat;
  lng;

  constructor(private trainService: TrainService) {
  }

  ngOnInit(): void {
    //this.getUserPosition();
    //testing
    this.lat = 51.8075292;
    this.lng = 4.6677689;
    //
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
      },
      error =>{
        console.warn(error);
      }
    );
  }
}
