import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './authentication/home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGuard } from './authentication/auth.guard';
import { ProtectedComponent } from './authentication/protected/protected.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'protected',
    component: ProtectedComponent, // Your protected route component
    canActivate: [AuthGuard], // Add the AuthGuard to canActivate
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
