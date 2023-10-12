import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/auth.guard';

const routes: Routes = [
  {
path:'dashboard',
canActivate:[AuthGuard],
loadChildren:() => import('./dashboard/dashboard.module').then(m=>m.DashboardModule)

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
