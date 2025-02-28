import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from "./Todo/todo/todo.component";
import { MainpageComponent } from "./Calculator/mainpage/mainpage.component";
import { HasRoleDirective } from './Directive/has-role.directive';
import { BrowserModule } from '@angular/platform-browser';
import { MainPageComponent } from './Routes/main-page/main-page.component';
import { DetailsPageComponentComponent } from './Routes/details-page-component/details-page-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookListComponentComponent } from './Book Project/Pages/book-list-component/book-list-component.component';


@Component({
  selector: 'app-root',
  imports: [ RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone:true
})
export class AppComponent {
  role:string='admin';
  title = 'Hello';
}
