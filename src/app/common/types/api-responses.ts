import { Holiday } from './holiday'

export class HolidayAPIResponse {
  status: number;
  holidays: Array<Holiday>;
}

export class IpInfoAPIResponse {
  city: string;
  country: string;
  hostname: string;
  ip: string;
  loc: string;
  org: string;
  postal: string;
  region: string;
}