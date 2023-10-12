import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private messages: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  currentMessages: Observable<string[]> = this.messages.asObservable();

  sendMessages(...msgs: string[]) {
    const currentMsgs = this.messages.value; // Get the current messages
    const newMsgs = [...currentMsgs, ...msgs]; // Combine the current and new messages
    this.messages.next(newMsgs); // Emit the updated array of messages
  }
}

