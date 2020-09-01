import { Component, OnInit } from '@angular/core';
import { TrainService } from './services/train.service';
import { CollectionOfPosition } from './models/train';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'WhatTrainIsClose';
  trains: CollectionOfPosition;

  constructor(private trainService: TrainService) {
  }

  ngOnInit(): void {
    this.getTrainsData();
  }

  getTrainsData() {
    this.trainService.getTrains().subscribe(
      data => {
        this.trains = data;
      }
    );
  }
}
