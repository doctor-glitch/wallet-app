import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  location = 'assets/res/';
  price: any;
  id: any;
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params.id);
      this.productService.product(params.id).subscribe((data: any) => {
        console.log(data);
        this.location = this.location + data.name + '.jpg';
        this.price = data.price;
        this.id = data._id;
      });
    });

  }
}
