import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';

import { HolidayApiService } from './common/services/holiday-api.service';
import { MonthHolidaysComponent } from './month-holidays/month-holidays.component'


@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    MonthHolidaysComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HolidayApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
