// publisher.component.ts
import { Component } from '@angular/core';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'app-publisher',
  template: `
    <button (click)="publish()">Publish Event</button>
  `,
})
export class PublisherComponent {
  constructor(private eventBusService: EventBusService) {}

  publish() {
    this.eventBusService.publishEvent('Custom Event Published');
  }
}
