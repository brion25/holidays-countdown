import * as moment from 'moment'
import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { Countdown } from '../common/types/clock'

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy, OnChanges {
  @Input() holidayDate: string;
  countdown: Countdown = {
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  holidayMs: number = 0;
  interval: any = null;

  constructor() {
    this.ticking = this.ticking.bind(this);
  }

  ngOnInit() {
    this.holidayMs = +moment(this.holidayDate).format('x');
    this.ticking();
    this.interval = setInterval(this.ticking, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  ngOnChanges(changes) {
    const { holidayDate } = changes;
    this.holidayMs = +moment(holidayDate.currentValue).format('x');
    clearInterval(this.interval);
    this.ticking();
    this.interval = setInterval(this.ticking, 1000);
  }

  ticking() {
    const today = +moment().format('x');
    const durationControl = moment.duration((this.holidayMs - today), 'milliseconds');
    this.countdown = {
      months: durationControl.months(),
      days: durationControl.days(),
      hours: durationControl.hours(),
      minutes: durationControl.minutes(),
      seconds: durationControl.seconds(),
    }
  }

}
