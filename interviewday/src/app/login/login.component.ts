// login.component.ts

import { Component } from '@angular/core';
import { MainService } from '../main.service';
import { user } from '../main.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private mainservice:MainService){}
  username: string = '';
  password: string = '';

  userauth:boolean | undefined ;
  user:user | undefined;
  ngOnInit(){
    this.mainservice.getusersData().forEach((x)=>{
      this.user = x[0];
    })

  }
  onSubmit() {
    // Add your authentication logic here
    
    if(this.user?.name === this.username && this.user.password === this.password){
      this.userauth = true;
      this.mainservice.auth(this.userauth);
      console.log('Username:', this.username);
    console.log('Password:', this.password);
      this.user.status = 'logged in';
    }
    else{
      alert("invalid credientials")
    }
    // You can send a request to an authentication service or perform any other action here
  }
}
