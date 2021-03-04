import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DateService } from '../date-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  date: Date;
  subscription: Subscription;

  constructor(
    public dateService: DateService
  ) { }

  ngOnInit(): void {
    this.subscription = this.dateService.currentDate.subscribe(date => this.date = date);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
