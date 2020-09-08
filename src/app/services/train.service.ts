import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PayloadClass, Payload } from '../models/Payload';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(private http: HttpClient){}

  public getTrains(lat, lng): Observable<Payload> {
    const headerDict = {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': '875a6e7eca7c462c94d556d9e4b677f4',
    }

    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this.http.get<Payload>("https://gateway.apiportal.ns.nl/virtual-train-api/api/vehicle?lat=2&lng=5&radius=1000", requestOptions);
  }

}
