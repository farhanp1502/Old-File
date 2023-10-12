export interface user{
  id?:number;
  name:string;
  email:string;
  password:string;
  status?:string;
}

export interface CartItem {
  product_id: string;
  name: string;
  price: number;
  quantity: number;
  // Add other properties as needed
}