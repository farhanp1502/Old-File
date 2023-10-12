// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private Authenticated = false ;

  constructor() { }

  // Simulate user authentication (you would have a real authentication logic here)
  isAuthenticated(): boolean {
    return this.Authenticated;
  }
}
