import { Component } from '@angular/core';
import { CartItem } from '../cart.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartData: CartItem[] = []; // Use the CartItem interface for cartData

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartData().subscribe((data: CartItem[]) => {
      this.cartData = data; // Store the retrieved cart data in the cartData variable
    });
  }
}
