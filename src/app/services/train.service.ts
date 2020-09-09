import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { PayloadClass, Payload } from '../models/Payload';
import { DetailedTrain, DetailedPayload } from '../models/detailed-train';
import { DisruptionPayload } from '../models/disruption';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  getHeaders() {
    return new HttpHeaders({
      'Ocp-Apim-Subscription-Key': '875a6e7eca7c462c94d556d9e4b677f4',
    });
  }
  constructor(public httpClient: HttpClient) { }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "server error.");
  }

  public getTrains(lat, lng, range): Observable<Payload> {
    var requestOptions = new HttpHeaders({
      'Ocp-Apim-Subscription-Key': '875a6e7eca7c462c94d556d9e4b677f4',
    });
    return this.httpClient.get<Payload>("/virtual-train-api/api/vehicle?lat=" + lat + "&lng=" + lng + "&distance="+range, { headers: this.getHeaders() });
  }

  public getTrain(traincode): Observable<DetailedTrain> {

    return this.httpClient.get<DetailedTrain>("/virtual-train-api/api/v1/trein/" + traincode, { headers: this.getHeaders() });
  }


  public getTrainsOnIds(ids: string[]): Observable<DetailedTrain[]> {
    var final = "";
    ids.forEach(element => {
      final = final + ", ";
    });
    return this.httpClient.get<DetailedTrain[]>("/virtual-train-api/api/v1/trein?ids=" + final + "&all=false", { headers: this.getHeaders() });
  }

  public getDisruptionsOnStation(station: string): Observable<DisruptionPayload> {
    return this.httpClient.get<DisruptionPayload>("/reisinformatie-api/api/v2/disruptions/station/" + station, { headers: this.getHeaders() });
  }
}
