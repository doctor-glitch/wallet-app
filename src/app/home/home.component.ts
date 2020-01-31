import { Component, OnInit } from '@angular/core';
import { HelloService } from '../services/hello.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  usr: any;

  constructor(private ser: HelloService) {
    this.usr = ser.getItem('user');
  }

  ngOnInit() {
  }

}
