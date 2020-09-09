import { Component, OnInit, Input } from '@angular/core';
import { Disruption } from 'src/app/models/disruption';

@Component({
  selector: 'app-disruption',
  templateUrl: './disruption.component.html',
  styleUrls: ['./disruption.component.scss']
})
export class DisruptionComponent implements OnInit {
  @Input()
  disruption: Disruption;

  constructor() { }

  ngOnInit(): void {
  }

}
