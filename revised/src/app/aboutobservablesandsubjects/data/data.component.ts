// data.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data',
  template: `
    <div>
      Data from API: {{ data | json }}
    </div>
  `,
})
export class DataComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.fetchData().subscribe((response) => {
      this.data = response;
    });
  }
}
