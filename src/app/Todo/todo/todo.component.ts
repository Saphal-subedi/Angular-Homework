import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule,CommonModule],
  template: '<li>(TODO) Read cup of coffee introduction</li>',
  templateUrl: './todo.component.html',
  styles:[
   
    
  
  ],
  styleUrls: ['./todo.component.scss']  // Corrected from styleUrl to styleUrls
})
export class TodoComponent {
  name: string = "Saphal Subedi";
  address: string = "Pepsi Cola";
  company: string = "Anmil";

listOfPlayers:string[]=["Gynendra","Maling","Paras","Messi","Drogba"];
}

