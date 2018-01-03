import { TestBed, inject } from '@angular/core/testing';

import { HolidayApiService } from './holiday-api.service';

describe('HolidayApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HolidayApiService]
    });
  });

  it('should be created', inject([HolidayApiService], (service: HolidayApiService) => {
    expect(service).toBeTruthy();
  }));
});
