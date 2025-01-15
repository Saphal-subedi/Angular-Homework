import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from '../../Routes/main-page/main-page.component';
import { DetailsPageComponentComponent } from '../../Routes/details-page-component/details-page-component.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../Route Guard/auth.guard';



const routes:Routes=[
  {path:'',component:MainPageComponent},
  {path:'details/:cricketerId',component:DetailsPageComponentComponent,canActivate: [AuthGuard] }
]
@NgModule({
  //If the component is not standalone then define it inside declarations else declare inside imports
  declarations: [],
  imports: [
    CommonModule,
    MainPageComponent,
    DetailsPageComponentComponent,
    RouterModule,
    RouterModule.forChild(routes)
  ],
  
  
})
export class TestModuleModule { }
