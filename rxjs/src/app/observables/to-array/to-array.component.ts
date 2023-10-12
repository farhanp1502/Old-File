import { Component } from '@angular/core';
import { from, of, toArray } from 'rxjs';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent {
constructor(private mainservice:MainService){}
obj:string[]=[];
  ngOnInit(){
    const arr = ['abc','def','ghi']
  const  source = from(arr);
  source.pipe(toArray()).subscribe(res=>{
    console.log(res);
    this.obj = res;
  });

  const source2 = of({a:'name',b:'age'},{a:'occuption',b:'salary'})
  source2.pipe(toArray()).subscribe(res=>console.log(res))
  }
}
