import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

// child.component.ts
@Component({
  selector: 'app-child',
  template: `
    <div *ngFor="let msg of messages">{{ msg }}</div>
  `,
})
export class ChildComponent implements OnInit {
  messages: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.currentMessages.subscribe((msgs) => {
      this.messages = msgs;
      console.log(msgs);
    });
  }
}
