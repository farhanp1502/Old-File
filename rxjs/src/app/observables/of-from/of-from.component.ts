import { Component } from '@angular/core';
import { from, of } from 'rxjs';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent {
constructor(private mainservice:MainService){}
obmsg:any;
  ngOnInit(){
    const obj1 = of({a:'far',b:'abhi'})
    obj1.subscribe(response=>{
      this.obmsg = response;
      console.log(response);
    })

  const  arr = ['far','kau','abhi']
  const arr2 = ['ac','def','ghi']
    const obj2 = from(arr)
    obj2.subscribe((res)=>{
      this.mainservice.print(res,'listele1')
    })
  }
}
