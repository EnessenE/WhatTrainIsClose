import { Component, OnInit, Input } from '@angular/core';
import { Train } from 'src/app/models/Payload';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss']
})
export class TrainComponent implements OnInit {

  @Input()
  train: Train;
  
  constructor() { }

  ngOnInit(): void {
  }

}
