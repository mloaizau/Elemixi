import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandommerService {
  constructor(
    private httpClient: HttpClient
  ) { }

  getRandomPhone() {
    const url = 'https://randommer.io/api/Phone/Generate?CountryCode=CL&Quantity=1';
    const httpOptions = {
      headers: new HttpHeaders({
        'x-api-key': '24ac60c5d7f74658a778c400cbaf6769',
        'Access-Control-Allow-Origin':'*',

      })
    };
    return this.httpClient.get(url, httpOptions);
  }
}
