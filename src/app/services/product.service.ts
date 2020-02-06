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
    return this.http.post(`${baseUrl}`, {
      id
    }
      , { withCredentials: true });
  }
  checkout(signUp, referal, mainBal, price) {
    console.log(signUp, referal, mainBal);
    return this.http.post(`${baseUrl}checkout`, {
      signUp,
      referal,
      mainBal,
      price
    }, { withCredentials: true }
    );
  }
  UpdateAll(signupCredit, referalCredit, cashback, refunds, referalComm, SalesComm, price) {
    return this.http.put(`${baseUrl}edit`, {
      signupCredit,
      referalCredit,
      cashback,
      refunds,
      referalComm,
      SalesComm,
      price
    }, { withCredentials: true }
    );
  }
}
