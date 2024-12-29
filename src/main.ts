import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { TodoComponent } from './app/Todo/todo/todo.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
