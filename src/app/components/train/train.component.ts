import { Component, OnInit, Input } from '@angular/core';
import { SimpleTrain } from 'src/app/models/Payload';
import { TrainService } from 'src/app/services/train.service';
import { DetailedTrain } from 'src/app/models/detailed-train';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss']
})
export class TrainComponent implements OnInit {

  @Input()
  train: SimpleTrain;
  detailedTrain: DetailedTrain;

  constructor(private trainService: TrainService) { }

  async ngOnInit(){
    await this.train;
    this.trainService.getTrain(this.train.ritId).subscribe(data => {
      this.detailedTrain = data;
    })
  }

}
