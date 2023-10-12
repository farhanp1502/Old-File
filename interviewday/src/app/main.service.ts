import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem, user } from './main.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  
  private apiUrl = 'http://localhost:7000/users'; // Replace with your API URL


  constructor(private http: HttpClient) {}

  // Define a method to make a GET request to retrieve cart data
  getusersData(): Observable<user[]> {
    return this.http.get<user[]>(this.apiUrl);
  }
 
  authenticated:boolean= false;
  auth(x:boolean){

      this.authenticated = x  ;
  }
  isauth():boolean{
    return this.authenticated;
  }

  getproducttocart(product:CartItem){
    this.http.post('http://localhost:7000/cart',product).subscribe();
  }
}
