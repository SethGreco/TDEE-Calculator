import { Component, OnInit } from '@angular/core';
import { concatMap, Observable, ReplaySubject } from 'rxjs';
import { BodyMetrics } from 'src/app/models/body-metrics';
import { Expenditure } from 'src/app/models/expenditure';
import { TdeeService } from 'src/app/services/tdee.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  weight!: number;
  heightFeet!: number;
  heightInches!: number;
  sex!: string;
  activity!: string;
  age!: number;


  bodyMetricsAction = new ReplaySubject<BodyMetrics>(1);
  someDisplayValue$: Observable<Expenditure> = this.bodyMetricsAction
    .pipe(
      concatMap(bodyMetrics => this.tdeeService.postBodyValues(bodyMetrics))
    )

  constructor(private tdeeService: TdeeService) { }

  ngOnInit(): void {
    
  }

   inputValues(): void{
    let measurements: BodyMetrics = {
      'weight': this.weight,
      'heightFeet': this.heightFeet,
      'heightInches': this.heightInches,
      'gender': this.sex,
      'activeLevel': this.activity,
      'age': this.age
    }

    this.bodyMetricsAction.next(measurements)
    }

}
