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
    return new Promise((resolve, reject) => {
      const url = 'https://randommer.io/api/Phone/Generate?CountryCode=CL&Quantity=1';
      const httpOptions = {
        headers: new HttpHeaders({
          'x-api-key': '24ac60c5d7f74658a778c400cbaf6769',
          'Access-Control-Allow-Origin': 'http://localhost:8100',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        })
      };
      this.httpClient.get(url, httpOptions).subscribe(data => {
        resolve(data)
      });
    });
  }
}
