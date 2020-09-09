import { Component, OnInit } from '@angular/core';
import { SimpleTrain } from 'src/app/models/Payload';
import { TrainService } from 'src/app/services/train.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'WhatTrainIsClose';
  trains: SimpleTrain[];
  lat;
  lng;

  constructor(private trainService: TrainService) {
  }

  ngOnInit(): void {
    //this.getUserPosition();
    //testing
    this.lat = 51.45193;
    this.lng = 5.455077;
    //
    this.loop();
  }

  async loop() {
    while (true) {
      console.log("Loading data");
      this.getTrainsData();
      await this.delay(5000);
    }
  }

  getUserPosition() {
    navigator.geolocation.getCurrentPosition(resp => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      console.log({ lng: resp.coords.longitude, lat: resp.coords.latitude });
    },
      err => {
        console.warn(err);
      });

  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  getTrainsData() {
    this.trainService.getTrains(this.lat, this.lng, 1000).subscribe(
      data => {
        this.trains = data.payload.treinen;
      },
      error => {
        console.warn(error);
      }
    );
  }
}
