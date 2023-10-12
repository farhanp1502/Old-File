// subscriber.component.ts
import { Component } from '@angular/core';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'app-subscriber',
  template: `
    <div>
      Subscribed Event: {{ subscribedEvent }}
    </div>
  `,
})
export class SubscriberComponent {
  subscribedEvent: string = '';

  constructor(private eventBusService: EventBusService) {
    this.eventBusService.events$.subscribe((event) => {
      this.subscribedEvent = event;
    });
  }
}
