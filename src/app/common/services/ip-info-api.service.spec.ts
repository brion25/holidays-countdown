import { TestBed, inject } from '@angular/core/testing';

import { IpInfoApiService } from './ip-info-api.service';

describe('IpInfoApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IpInfoApiService]
    });
  });

  it('should be created', inject([IpInfoApiService], (service: IpInfoApiService) => {
    expect(service).toBeTruthy();
  }));
});
