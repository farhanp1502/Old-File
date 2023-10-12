import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      (user) => {
        if (user) {
          // Successful login, you can store user information in a service or local storage
          localStorage.setItem('username',this.username);
          localStorage.setItem('password',this.password);
          console.log('Login successful');
        } else {
          // Invalid credentials, display an error message
          console.error('Invalid credentials');
        }
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
  }
}
