import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HelloService } from '../services/hello.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  location = 'assets/res/';
  price: any;
  description: any;
  id: any;
  usr: any;
  constructor(private ser: HelloService, private productService: ProductService, private route: ActivatedRoute, private router: Router) {
    this.usr = ser.getItem('user');
  }

  checkout() {
    this.router.navigate([`/product/${this.id}/checkout`]);
  }
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
    this.route.params.subscribe(params => {
      console.log(params.id);
      this.productService.product(params.id).subscribe((data: any) => {
        console.log(data);
        this.location = this.location + data.name + '.jpg';
        this.price = data.price;
        this.id = data._id;
        this.description = data.description;
      });
    });
  }
}
