// parent.component.ts
import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent',
  template: `
    <button (click)="sendMessage()">Send Message</button>
  `,
})
export class ParentComponent {
  constructor(private dataService: DataService) {}

  sendMessage(){
    this.dataService.sendMessages('hey!!!!','farhan');
  }
 
}
