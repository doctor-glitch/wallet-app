import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { HelloService } from '../services/hello.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userForm: any;
  error = true;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private helloService: HelloService) {
    this.userForm = fb.group({
      fname: new FormControl('', [
        Validators.required,
      ]),
      lname: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
      ]),
      pass1: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      pass2: new FormControl('', [
        Validators.required,
      ]),
      referalId: new FormControl(''),
    }, { validator: this.checkPasswords });
  }
  checkPasswords(group: FormGroup) {
    let pass = group.get('pass1').value;
    let confirmPass = group.get('pass2').value;
    return pass === confirmPass ? null : { passwordNotSame: true };
  }
  add() {
    console.log(this.userForm);
    if (!this.userForm.valid) {
    } else {
      // tslint:disable-next-line: max-line-length
      this.userService.user(this.userForm.value.fname, this.userForm.value.lname, this.userForm.value.email, this.userForm.value.pass1, this.userForm.value.referalId).subscribe((data: any) => {
        console.log(data);
        this.helloService.setItem('user', data.user.fname);
        this.router.navigate(['']);
      }, err => {
        alert(err.error.message);
      });
    }
  }

  get(controlName) {
    return this.userForm.get(controlName);
  }

  hasError(controlName) {
    return this.get(controlName).errors && (this.get(controlName).dirty || this.get(controlName).touched);
  }

  ngOnInit() {
  }

}
