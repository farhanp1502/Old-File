// login.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

interface AuthResponse {
  success: boolean;
  // You can include other properties from the API response here
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const username = form.value.username;
      const password = form.value.password;
try{

  this.authService.postData(username, password).subscribe(
    (response: AuthResponse) => {
      if (response.success) {
        // Authentication successful, navigate to protected route
        console.log('Login successful');
      } else {
        // Authentication failed, handle the error or show a message
        console.error('Authentication failed.');
      }
    })
}
catch(error){

  console.log(error);
}

      ;
    }
  }
}
