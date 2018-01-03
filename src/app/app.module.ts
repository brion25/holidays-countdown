import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { HolidayComponent } from './holiday/holiday.component';

import { HolidayApiService } from './common/services/holiday-api.service'


@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    HolidayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HolidayApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
