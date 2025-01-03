import { Component, OnInit } from '@angular/core';
import { Cricketer } from '../../Model/Cricketer';
import { ActivatedRoute, Router } from '@angular/router';
import { CalculationService } from '../../Calculator/calculation.service';
import { CommonModule } from '@angular/common';

@Component({
 
  selector: 'app-details-page-component',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './details-page-component.component.html',
  styleUrls: ['./details-page-component.component.scss']
})
export class DetailsPageComponentComponent implements OnInit {
  cricketer: Cricketer | any;
  cricketerId: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private calculationService: CalculationService,
    private router: Router 
  ) {}

  ngOnInit(): void {
    const cricketerId = +this.route.snapshot.paramMap.get('cricketerId')!;
  
    if (!isNaN(cricketerId)) {
      this.cricketer = this.calculationService.cricketers.find(
        (cricketer) => cricketer.id === cricketerId
     
      );
    }
    console.log("saphal subedi");
    console.log(this.cricketer);
  }
}
