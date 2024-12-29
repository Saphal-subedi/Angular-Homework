import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from "./Todo/todo/todo.component";
import { MainpageComponent } from "./Calculator/mainpage/mainpage.component";
import { HasRoleDirective } from './Directive/has-role.directive';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [ MainpageComponent,HasRoleDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone:true
})
export class AppComponent {
  role:string='admin';
  title = 'Hello';
}
