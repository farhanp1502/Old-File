import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';
  private loggedInUser: any; // You can define a user object to store user information

  constructor(private http: HttpClient) {}

  // Perform the login and store user information if login is successful
  login(username: string, password: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?username=${username}&password=${password}`)
      .pipe(
        map((user: any) => {
          console.log(user);
          if (user.username === username && user.password === password) {
            // Store user information in the service
            this.loggedInUser = user;
            return true; // Authentication successful
          } else {
            return false; // Authentication failed
          }
        })
      );
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    // You can implement your own logic here based on the presence of user information

    return !!this.loggedInUser;
  }

  // Get the currently logged-in user
  getLoggedInUser(): any {
    return this.loggedInUser;
  }

  // Perform logout by clearing user information
  logout(): void {
    this.loggedInUser = null;
  }
}
