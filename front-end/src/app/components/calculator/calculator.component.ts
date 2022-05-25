import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BodyMetrics } from 'src/app/models/body-metrics';
import { ResTdeeBmr } from 'src/app/models/res-tdee-bmr';
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


  someDisplayValue$!: Observable<ResTdeeBmr>;

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
   
    const returnValue$ = this.tdeeService.postBodyValues(measurements);

    this.someDisplayValue$ = returnValue$
    
    }

}
