import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent {
constructor(private mainservice:MainService){}

cusobs2:any;
sub!:Subscription;
  ngOnInit(){

    const cusobs = Observable.create((observer:any)=>{
      setTimeout(()=>{
        observer.next('Angular')
      },1000)
      setTimeout(()=>{
        observer.next('typescript')
        // observer.error(new Error('limit exceeds'));
        
      },2000)
      setTimeout(()=>{
        observer.next('html and css')
      },3000)
    })
    cusobs.subscribe((res: string)=>{
      this.mainservice.print(res,'list')
    })


const arr = ['angular','typescript','html']

   this.cusobs2 = Observable.create((observer:any)=>{
     let count=0;
      setInterval(()=>{
        observer.next(arr[count])
        
        count ++;
        if(count >=3 ){
          observer.complete();        }
      },1000)
   
    })
    this.cusobs2.subscribe((res: string)=>{
      console.log(res);
      this.mainservice.print(res,'list2')

    })
  }
}
