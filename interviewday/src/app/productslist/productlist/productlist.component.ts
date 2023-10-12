import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductlistService } from '../productlist.service';
import { CartItem } from 'src/app/main.model';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  products: Product[] = [];
  cartproduct: CartItem = {} as CartItem; 

  constructor(private productService: ProductlistService,private mainservice:MainService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
  addToCart(x:CartItem){
    this.cartproduct.name = x.name;
    this.cartproduct.price = x.price;
    this.cartproduct.product_id = x.product_id;
    this.cartproduct.quantity = x.quantity;
    console.log(this.cartproduct);
    this.mainservice.getproducttocart(this.cartproduct);
  }

}
