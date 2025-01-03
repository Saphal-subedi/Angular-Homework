import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './Routes/main-page/main-page.component';
import { DetailsPageComponentComponent } from './Routes/details-page-component/details-page-component.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: MainPageComponent}, 
  { path: 'details/:cricketerId', component: DetailsPageComponentComponent  } 
];
