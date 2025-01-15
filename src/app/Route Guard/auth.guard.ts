// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { CalculationService } from '../Calculator/calculation.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root' // This makes the guard available application-wide
})

export class AuthGuard implements CanActivate {

  constructor(
    private calculationService: CalculationService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean  {
    console.log("I am Auth guard");

    const cricketerIdParam = route.paramMap.get('cricketerId');
    const cricketerId = cricketerIdParam ? +cricketerIdParam : null;

    const cricketer = this.calculationService.cricketers.find(c => c.id === cricketerId);

    if (cricketer) {
      if (cricketer.role === 'Batsman') {
        return true;
      } 
    } 

    return false;
  }
}
