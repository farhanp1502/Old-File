import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomenavComponent } from './homenav/homenav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: HomenavComponent }
    ])
  ]
})
export class HomeModule { }
