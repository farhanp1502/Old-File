import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }
  print(val:string,id:any){
    let el= document.createElement('li');
    el.innerText = val;
    document.getElementById(id)?.appendChild(el);
  }
}
