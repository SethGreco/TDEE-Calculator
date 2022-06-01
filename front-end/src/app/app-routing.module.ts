import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { MacroComponent } from './components/macro/macro.component';

const routes: Routes = [
  {path: "calculate", component: CalculatorComponent},
  {path: "macros", component: MacroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
