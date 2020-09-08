import { Component, OnInit } from '@angular/core';
import { TrainService } from './services/train.service';
import { PayloadClass, SimpleTrain } from './models/Payload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WhatTrainIsClose';
}
