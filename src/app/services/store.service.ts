import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getStore(){
    return new Promise((resolve, reject) => {
      const url = 'https://fakestoreapi.com/products/category/electronics';
      this.httpClient.get(url).subscribe(data => {
        resolve(data)
      });
    });
  }

}
