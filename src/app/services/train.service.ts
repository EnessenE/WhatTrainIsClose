import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { PayloadClass, Payload } from '../models/Payload';

@Injectable({
  providedIn: 'root'
})
export class TrainService {


  constructor(public httpClient: HttpClient) { }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "server error.");
  }

  public getTrains(lat, lng): Observable<Payload> {
    var requestOptions = new HttpHeaders({
      'Ocp-Apim-Subscription-Key': '875a6e7eca7c462c94d556d9e4b677f4',
    });
    // this.httpClient.get<Payload>("https://gateway.apiportal.ns.nl/virtual-train-api/api/vehicle", { headers: requestOptions }).subscribe((res) => {
    //   console.log(res);
    // });
    this.httpClient.get<string>("http://de1api01.reasulus.nl/nsapi/virtual-train-api/api/vehicle").subscribe((res) => {
      console.log(res);
    });
    return null;
  }

}
