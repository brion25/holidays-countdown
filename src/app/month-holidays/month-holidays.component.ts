import { Component, OnInit } from '@angular/core';

import { HolidayApiService } from '../common/services/holiday-api.service'
import { Holiday } from '../common/types/holiday'

@Component({
  selector: 'app-month-holidays',
  templateUrl: './month-holidays.component.html',
  styleUrls: ['./month-holidays.component.css']
})
export class MonthHolidaysComponent implements OnInit {
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  selectedMonth: string = '';
  holidays: Array<Holiday> = [];
  loading: boolean = false;

  constructor(private holidayService: HolidayApiService) { }

  ngOnInit() {
  }

  onChange() {
    if (this.selectedMonth && this.selectedMonth !== '-') {
      this.loading = true;
      this.holidayService.getMonthHolidays(this.selectedMonth).subscribe(holidays => {
        this.holidays = holidays;
        this.loading = false;
        console.log(holidays)
      })
    }
  }

}
