// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'login', component: LoginComponent },
  {
    path: 'home',
    canActivate: [AuthGuard], // Protect this route using AuthGuard
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
