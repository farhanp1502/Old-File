import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const routes:Routes =[
  {path:'',component:DashboardComponent},
  {path:'nav',component:NavbarComponent}
]

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

})
export class DashboardModule { }
