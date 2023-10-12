import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { LoginService } from "../services/login.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService:LoginService,private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree  {
      if(this.loginService.isauth()){
        return true;
      }
    
        return this.router.createUrlTree(['']);
      
  }
}