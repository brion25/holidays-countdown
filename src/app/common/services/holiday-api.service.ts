import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap';

import * as moment from 'moment'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { stringify } from 'querystring'

import { HolidayAPIResponse, IpInfoAPIResponse } from '../types/api-responses'
import { Holiday } from '../types/holiday'

@Injectable()
export class HolidayApiService {
  private IPINFO_HOST: string = 'https://ipinfo.io';
  private HOLIDAYS_API_HOST: string = 'https://holidayapi.com/v1/holidays';
  private HOLIDAYS_API_KEY: string = 'ddd6f750-641d-4c74-8f83-44bca9d41134';

  constructor(private http: HttpClient) { }

  getNextHoliday(): Observable<Holiday> {
    return this.http.get(this.IPINFO_HOST)
      .mergeMap((data: IpInfoAPIResponse) => {
        const today = moment();
        const querystring = {
          key: this.HOLIDAYS_API_KEY,
          country: data.country,
          year: today.subtract(1, 'y').year(),
          month: today.format('MM')
        }

        return this.http.get(`${this.HOLIDAYS_API_HOST}?${stringify(querystring)}`)
      })
      .map((res: HolidayAPIResponse) => {
        const nextHoliday = res.holidays.pop()
        return {
          ...nextHoliday,
          date: moment(nextHoliday.date).add(1, 'y').format('YYYY-MM-DD')
        }
      })
  }

  getMonthHolidays(month): Observable<Holiday> {
    return this.http.get(this.IPINFO_HOST)
      .mergeMap((data: IpInfoAPIResponse) => {
        const today = moment();
        const querystring = {
          key: this.HOLIDAYS_API_KEY,
          country: data.country,
          year: today.subtract(1, 'y').year(),
          month
        }

        return this.http.get(`${this.HOLIDAYS_API_HOST}?${stringify(querystring)}`)
      })
      .map((res: HolidayAPIResponse) => res.holidays.map((holiday: Holiday) => ({
        ...holiday,
        date: moment(holiday.date).add(1, 'y').format('ll')
      })))
  }
}
