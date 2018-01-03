import { Component, OnInit } from '@angular/core';

import { HolidayApiService } from './common/services/holiday-api.service'
import { IpInfoApiService } from './common/services/ip-info-api.service'
import { Holiday } from './common/types/holiday'
import { Location } from './common/types/location'

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
  location: Location = {
    country: '',
    city: ''
  }

  constructor(private holidayService: HolidayApiService, private ipInfoService: IpInfoApiService) {
    this.getInitialData = this.getInitialData.bind(this);
  }

  ngOnInit() {
    this.ipInfoService.getLocationBasedOnTheIP().subscribe(this.getInitialData);
  }

  getInitialData(location) {
    this.location = location;
    this.holidayService.getNextHoliday().subscribe(data => this.holidayInfo = data);
  }
}
