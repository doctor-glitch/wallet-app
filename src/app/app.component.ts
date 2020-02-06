import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HelloService } from './services/hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wallet-app';
  usr: any;
  constructor() {

  }
}
