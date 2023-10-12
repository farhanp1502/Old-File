// event-bus.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventBusService {
  private eventBus = new Subject<string>();

  // Observable to publish events
  events$ = this.eventBus.asObservable();

  publishEvent(event: string) {
    this.eventBus.next(event);
  }
}
