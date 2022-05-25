import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { BodyMetrics } from '../models/body-metrics';
import { ResTdeeBmr } from '../models/res-tdee-bmr';

@Injectable({
  providedIn: 'root'
})
export class TdeeService {

  url: string = "http://localhost:5000/calculate-tdee";


  constructor(private http:HttpClient) {  }

  postBodyValues(bodyMetrics: BodyMetrics): Observable<ResTdeeBmr>{
    return this.http.post<ResTdeeBmr>(this.url, bodyMetrics)
      .pipe(
        map(results => results)
      );  
  }
}
