import { Component, OnInit } from '@angular/core';
import { Cricketer } from '../../Model/Cricketer';
import { Router } from '@angular/router';
import { CalculationService } from '../../Calculator/calculation.service';
import { CommonModule } from '@angular/common';  // To import NgForOf

@Component({
  selector: 'app-main-page',
  standalone: true,
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'], // Corrected styleUrls
  imports: [CommonModule], // Correct import for NgForOf
})
export class MainPageComponent implements OnInit {
  
  cricketers: Cricketer[] = [];

  constructor(private router: Router, private calculationService: CalculationService) {}

  ngOnInit(): void {
    this.cricketers = this.calculationService.cricketers;
  }

  viewDetails(cricketerId: number): void {
    this.router.navigate([`/details/${cricketerId}`]);
  }
}
