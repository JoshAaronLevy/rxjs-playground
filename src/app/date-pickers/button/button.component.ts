import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DateService } from 'src/app/date-service.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, OnDestroy {
  date: Date;

  dates: Date[];

  rangeDates: Date[];

  minDate: Date;

  maxDate: Date;

  es: any;

  invalidDates: Array<Date>;

  subscription: Subscription;

  constructor(
    public dateService: DateService
  ) { }

  ngOnInit(): void {
    this.subscription = this.dateService.currentDate.subscribe(date => this.date = date);

    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    // let prevMonth = (month === 0) ? 11 : month - 1;
    // let prevYear = (prevMonth === 11) ? year - 1 : year;
    // let nextMonth = (month === 11) ? 0 : month + 1;
    // let nextYear = (nextMonth === 0) ? year + 1 : year;
    // let invalidDate = new Date();
    // invalidDate.setDate(today.getDate() - 1);
    // this.invalidDates = [today, invalidDate];
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  pickDate(value: Date) {
    this.dateService.changeDate(value);
  }

}
