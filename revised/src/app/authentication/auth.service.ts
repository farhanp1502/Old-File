import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the AuthResponse interface
interface AuthResponse {
  success: boolean;
  // You can include other properties from the API response here
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3100'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  postData(username: string, password: string): Observable<AuthResponse> {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, formData);
  }

  // Add an isAuthenticated method to check if the user is authenticated
  isAuthenticated(): boolean {
    // You can implement your authentication logic here.
    // For example, if you have a token-based authentication system,
    // you can check if the token is present and not expired.
    // Return true if authenticated, false otherwise.
    
    // Replace this with your actual authentication logic
    const token = localStorage.getItem('token');
    return !!token;
  }
}
