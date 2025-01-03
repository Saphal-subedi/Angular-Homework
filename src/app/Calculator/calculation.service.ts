import { EventEmitter, Injectable, Output } from '@angular/core';
import { retry } from 'rxjs';
import { Cricketer } from '../Model/Cricketer';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {


  constructor() {
    
   }
   cricketers: Cricketer[] = [
    { id: 10, name: "Sachin Tendulkar", country: "India", age: 50, role: "Batsman" },
    { id: 20, name: "Don Bradman", country: "Australia", age: 92, role: "Batsman" },
    { id: 30, name: "Shane Warne", country: "Australia", age: 52, role: "Bowler" },
    { id: 40, name: "Jacques Kallis", country: "South Africa", age: 49, role: "All-rounder" },
    { id: 50, name: "Sir Vivian Richards", country: "West Indies", age: 73, role: "Batsman" },
    { id: 60, name: "Sir Jack Hobbs", country: "England", age: 92, role: "Batsman" },
    { id: 70, name: "Kumar Sangakkara", country: "Sri Lanka", age: 47, role: "Wicketkeeper-Batsman" },
    { id: 80, name: "Shakib Al Hasan", country: "Bangladesh", age: 37, role: "All-rounder" },
    { id: 90, name: "Rashid Khan", country: "Afghanistan", age: 25, role: "Bowler" },
    { id: 100, name: "Imran Khan", country: "Pakistan", age: 70, role: "All-rounder" }
  ];
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
