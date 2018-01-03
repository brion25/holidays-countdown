import { Component, OnInit } from '@angular/core';

import { HolidayApiService } from './common/services/holiday-api.service'
import { Holiday } from './common/types/holiday'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Holidays Countdown';
  holidayInfo: Holiday = {
    name: '',
    date: ''
  }

  constructor(private holidayService: HolidayApiService) {  }

  ngOnInit() {
    this.holidayService.getNextHoliday().subscribe(data => this.holidayInfo = data)
  }
}
