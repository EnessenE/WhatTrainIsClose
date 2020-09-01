import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CollectionOfPosition } from '../models/train';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(private http: HttpClient){}

  public getTrains(): Observable<CollectionOfPosition> {
    return this.http.get<CollectionOfPosition>("https://spoorkaart.mwnn.nl/?op=trains&bbox=-13.447525%2C32.824057%2C25.268295%2C59.87782");
  }

}
