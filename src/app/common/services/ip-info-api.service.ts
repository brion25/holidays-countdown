import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { IpInfoAPIResponse } from '../types/api-responses'

@Injectable()
export class IpInfoApiService {
  private IPINFO_HOST: string = 'https://ipinfo.io';
  private locationInfo: IpInfoAPIResponse = {
    city: '',
    country: '',
    hostname: '',
    ip: '',
    loc: '',
    org: '',
    postal: '',
    region: ''
  }

  constructor(private http: HttpClient) {
    http.get(this.IPINFO_HOST)
      .subscribe((data: IpInfoAPIResponse) => this.locationInfo = data);
  }

  getLocationBasedOnTheIP(): Observable<any> {
    if (this.locationInfo.country) {
      const ipLocation$ = new Observable(observer => {
        observer.next(this.locationInfo);
        observer.complete();
      });

      return ipLocation$;
    }

    return this.http.get(this.IPINFO_HOST);
  }
}
