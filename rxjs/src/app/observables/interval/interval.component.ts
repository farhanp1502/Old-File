import { Component } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent {
constructor(private mainservice:MainService){}
  // broadcast = interval(1000);
  broadcast = timer(3000,1000)
videosub!: Subscription;
obsmsg: string = '';

ngOnInit() {
  this.videosub = this.broadcast.subscribe(res => {
    this.obsmsg = 'video ' + res;
    this.mainservice.print(this.obsmsg,'listele');
    if (res >= 5) {
      this.videosub.unsubscribe();
    }
  });
}
}
