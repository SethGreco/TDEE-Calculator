import { Component, OnInit } from '@angular/core';
import { BodyMetrics } from 'src/app/models/body-metrics';

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

  constructor() { }

  ngOnInit(): void {
  }

  inputValues(): void{
    let measurements: BodyMetrics = {
      'weight': this.weight,
      'heightFeet': this.heightFeet,
      'heightInches': this.heightInches,
      'sex': this.sex,
      'activity': this.activity,
      'age': this.age
    }

    console.log(measurements)
  }

}
