import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  observervar1=0;
  observervar2=0;
  subjectvar1=0;
  subjectvar2=0;

  myobserver(){
    const observer = new Observable<number>((obser)=>{
      obser.next(Math.floor(Math.random() * 99 )+ 1);
    })
    observer.subscribe((val)=>{
      this.observervar1 = val
    })
    observer.subscribe((val1)=>{
      this.observervar2 =val1;
    })
    
  }
  mysubject(){
    const subj = new Subject<number>();
    subj.subscribe((data)=>{
      this.subjectvar1 = data;
    })
    subj.subscribe((data)=>{
      this.subjectvar2 = data;
    })
    subj.next(Math.floor(Math.random() * 99 )+ 1)
  }
}
