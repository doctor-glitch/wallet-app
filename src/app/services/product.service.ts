import { Injectable } from '@angular/core';
import { baseUrl } from '../config/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  product(id) {
    console.log('hello', baseUrl);
    return this.http.post(`${baseUrl}`,{
      id
    }
      , { withCredentials: true });
  }
}
