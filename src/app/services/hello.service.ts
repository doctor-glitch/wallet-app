import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor() { }
  setItem(key, value) {
    localStorage.setItem(key, value);
  }
  getItem(key) {
    return localStorage.getItem(key);
  }
}
