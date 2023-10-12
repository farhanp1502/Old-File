import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css']
})
export class FormEventComponent {
  constructor(private mainservice:MainService){}
@ViewChild('addbtn') addbtn!:ElementRef;

ngAfterViewInit(){
  let count = 1;
  fromEvent(this.addbtn.nativeElement,'click').subscribe(res=>{
  let countval = 'video '+count++;
  console.log(countval);
  this.mainservice.print(countval,'listele')
  this.mainservice.print(countval,'listele2');
  })
}
}
