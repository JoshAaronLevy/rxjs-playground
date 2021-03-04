import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  private dateSource = new BehaviorSubject<Date>(null);
  currentDate = this.dateSource.asObservable();

  constructor() { }

  changeDate(date: Date): void {
    this.dateSource.next(date);
  }
}
