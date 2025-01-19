import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './Routes/main-page/main-page.component';
import { DetailsPageComponentComponent } from './Routes/details-page-component/details-page-component.component';
import { NgModule } from '@angular/core';
import { LandingPageComponent } from './Form/landing-page/landing-page.component';
import { AddBookComponentComponent } from './Book Project/Pages/add-book-component/add-book-component.component';
import { BookDetailComponentComponent } from './Book Project/Pages/book-detail-component/book-detail-component.component';

export const routes: Routes = [
  // {path:'',component:LandingPageComponent},
  //   { path: 'CricketerTablePage', component: MainPageComponent}, 
  // { path: 'details/:cricketerId', component: DetailsPageComponentComponent  } 
//--If you are doing lazy loading in component then use loadComponent and if you are doing lazy loading in module then use loadChildren---->
  //{path: '',loadChildren: () => import('./Book Project/Pages/book-list-component/book-list-component.component').then(m => m.BookListComponentComponent)} ,//lazy loading
  {path: '',loadComponent: () => import('./Book Project/Pages/book-list-component/book-list-component.component').then(m => m.BookListComponentComponent)},
  {path:'addbook',component:AddBookComponentComponent},
  {path:'details/:bookId',component:BookDetailComponentComponent}
];
