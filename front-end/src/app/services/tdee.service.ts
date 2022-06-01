import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BodyMetrics } from '../models/body-metrics';
import { Expenditure } from '../models/expenditure';

@Injectable({
  providedIn: 'root'
})
export class TdeeService {

  url: string = "http://localhost:5000/calculate-tdee";

  constructor(private http:HttpClient) {  }

  postBodyValues(bodyMetrics: BodyMetrics): Observable<Expenditure>{
    return this.http.post<Expenditure>(this.url, bodyMetrics);
  }
}
