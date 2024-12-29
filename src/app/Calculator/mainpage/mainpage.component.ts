import { Component } from '@angular/core';
import { TextboxComponent } from "../textbox/textbox.component";
import { CalculationService } from '../calculation.service';

@Component({
  selector: 'app-mainpage',
  imports: [TextboxComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent {
  first:number=0;
  second:number=0;
    sum:number=0;
    diff:number=0;
    divide:number=0;
    multiply:number=0;
    remainder:number=0;
  constructor(private calculationService:CalculationService)
  {

  }
  
  
  handleFirstNumberChange(newValue: number) {
    this.first=newValue;
    this.sum=this.calculationService.add(this.first,this.second);
    this.diff=this.calculationService.substract( this.first,this.second);
    this.multiply=this.calculationService.multiple(this.first,this.second);
    this.divide=this.calculationService.divide(this.first,this.second);
    this.remainder=this.calculationService.remainder(this.first,this.second);

   
   
  }

  handleSecondNumberChange(newValue: number) {
    this.second=newValue;
    this.sum=this.calculationService.add(this.first,this.second);
    this.diff=this.calculationService.substract( this.first,this.second);
    this.multiply=this.calculationService.multiple(this.first,this.second);
    this.divide=this.calculationService.divide(this.first,this.second);
    this.remainder=this.calculationService.remainder(this.first,this.second);
  }

}
