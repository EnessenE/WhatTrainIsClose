import { Component, OnInit } from '@angular/core';
import { SimpleTrain } from 'src/app/models/Payload';
import { TrainService } from 'src/app/services/train.service';
import { Disruption } from 'src/app/models/disruption';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'WhatTrainIsClose';
  trains: SimpleTrain[];
  disruptions: Disruption[];
  lat;
  lng;

  constructor(private trainService: TrainService) {
  }

  ngOnInit(): void {
    //this.getUserPosition();
    //TQ
    this.lat = environment.lat;
    this.lng = environment.long;
    //DDR
    // this.lat = 51.807253;
    // this.lng = 4.667997;
    //
    this.loop();
    this.disrupLoop();
  }

  async loop() {
    while (true) {
      console.log("Loading data");
      this.getTrainsData();
      await this.delay(environment.refreshinterval);
    }
  }

  async disrupLoop() {
    while (true) {
      console.log("Loading disruptions");
      this.getDisruptions();
      await this.delay(environment.refreshinterval);
    }
  }

  getDisruptions(){
    this.trainService.getDisruptionsOnStation(environment.stationCode).subscribe(
      data => {
        this.disruptions = data.payload;
      },
      error => {
        console.warn(error);
      }
    );
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
    this.trainService.getTrains(this.lat, this.lng, environment.range).subscribe(
      data => {
        this.trains = data.payload.treinen;
      },
      error => {
        console.warn(error);
      }
    );
  }
}
