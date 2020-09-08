import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { PayloadClass, Payload } from '../models/Payload';
import { DetailedTrain, DetailedPayload } from '../models/detailed-train';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  getHeaders(){
    return new HttpHeaders({
      'Ocp-Apim-Subscription-Key': '875a6e7eca7c462c94d556d9e4b677f4',
    });
  }
  constructor(public httpClient: HttpClient) { }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "server error.");
  }

  public getTrains(lat, lng): Observable<Payload> {
    var requestOptions = new HttpHeaders({
      'Ocp-Apim-Subscription-Key': '875a6e7eca7c462c94d556d9e4b677f4',
    });
    return this.httpClient.get<Payload>("/virtual-train-api/api/vehicle?lat="+lat+"&lng="+lng+"&distance=5000", { headers: this.getHeaders() });
  }

  public getTrain(traincode): Observable<DetailedTrain> {

    return this.httpClient.get<DetailedTrain>("/virtual-train-api/api/v1/trein/"+traincode, { headers: this.getHeaders() });
  }

}
