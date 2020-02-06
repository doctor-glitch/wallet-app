import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { FormBuilder } from '@angular/forms';
import { HelloService } from '../services/hello.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  location = 'assets/res/';
  price: any;
  id: any;
  checkoutForm: any;
  referalCredit = 0;
  signupCredit = 0;
  mainBalance = 0;
  finalBalance = 0;
  cashback: 0;
  refund: 0;
  refComm: 0;
  saleComm: 0;
  usr: any;
  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private productService: ProductService, private fb: FormBuilder, private router: Router, private ser: HelloService) {
    this.usr = ser.getItem('user');
    this.checkoutForm = fb.group({
      signUp: false,
      referal: false,
      mainBal: false
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params.id);
      this.productService.product(params.id).subscribe((data: any) => {
        console.log(data);
        this.location = this.location + data.name + '.jpg';
        this.price = data.price;
        this.id = data._id;
        this.finalBalance = data.price;
      });
    });

    this.checkoutForm.valueChanges.subscribe(val => {
      console.log(val);
      // tslint:disable-next-line: max-line-length
      this.productService.checkout(this.checkoutForm.value.signUp, this.checkoutForm.value.referal, this.checkoutForm.value.mainBal, this.price).subscribe((data: any) => {
        console.log(data);
        this.referalCredit = data.referalDiscount;
        this.signupCredit = data.signUpDiscount;
        this.cashback = data.cashbackDiscount;
        this.refund = data.refundsDiscount;
        this.refComm = data.referalCommDiscount;
        this.saleComm = data.SalesCommDiscount;
        this.mainBalance = data.cashbackDiscount + data.refundsDiscount + data.referalCommDiscount + data.SalesCommDiscount;
        this.finalBalance = data.finalPrice;
      });
    });

  }

  submit() {
    // tslint:disable-next-line: max-line-length
    this.productService.UpdateAll(this.signupCredit, this.referalCredit, this.cashback, this.refund, this.refComm, this.saleComm, this.price).subscribe(data => {
      console.log('Success');
      this.router.navigate(['payment']);
    });
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
}
