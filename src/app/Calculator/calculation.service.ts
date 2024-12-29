import { EventEmitter, Injectable, Output } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {


  constructor() { }
add(first:number,second:number)
{
  
 return first+second;

}
substract(first:number,second:number)
{
  
 return  first-second;

}
multiple(first:number,second:number)
{
  return first*second;

}
divide(first:number,second:number)
{
  return first/second;

}
remainder(first:number,second:number)
{
  return first%second;
}


}
