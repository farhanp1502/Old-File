import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private authenticated = true  ;
  constructor() { }
  isauth():boolean{
    return this.authenticated;
  }
}
