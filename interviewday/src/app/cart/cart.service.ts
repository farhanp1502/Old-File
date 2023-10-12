import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../main.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = 'http://localhost:7000/cart'; // Replace with your API URL


  constructor(private http: HttpClient) {}

  // Define a method to make a GET request to retrieve cart data
  getCartData(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.apiUrl);
  }
}
