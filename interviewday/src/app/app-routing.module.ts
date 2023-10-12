import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
 {path:'',redirectTo:'home',pathMatch:'full'},
 {path:'home',component:HomeComponent},
 {path:'login',component:LoginComponent},
  { path: 'productlist',
    canActivate:[AuthGuard],
    loadChildren: () => import('./productslist/productslist.module').then((m) => m.ProductslistModule) },
  { path: 'cartshopping',
    canActivate:[AuthGuard],
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
