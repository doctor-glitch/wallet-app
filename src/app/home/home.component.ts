import { Component, OnInit } from '@angular/core';
import { HelloService } from '../services/hello.service';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  id1 = '5e3ae50b41ed313440fc97da';
  price: any = 0;
  usr: any;
  offer = true;
  constructor(private productService: ProductService, private ser: HelloService, private router: Router) {
    this.usr = ser.getItem('user');
  }
  // banner() {
  //   this.router.navigate(['register', this.offer]);
  // }
  home() {
    this.router.navigate(['']);
  }
  register() {
    this.router.navigate(['register']);
  }
  login() {
    this.router.navigate(['login']);
  }

  ngOnInit() {
    this.productService.product(this.id1).subscribe((data: any) => {
      console.log(data);
      this.price = data.price;
    });
  }

}
