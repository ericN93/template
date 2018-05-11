import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { UserService } from '../_services/user-service/user.service';
import { Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private userService: UserService, public router: Router, public snackBar: MatSnackBar) {
    this.createForm();
  }

  ngOnInit() { }

  createForm() {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.email ]),
      'password': new FormControl('', [
        Validators.required])
    });
  }

  onSubmit(){
    //mock since logout does not exist yet
    this.userService.setUserLoggedOut()
    this.userService.setUser(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)

    //check localstorage since i dont have a real api
    if(this.userService.getUserLoggedIn()){
      this.router.navigate(["/home"]);
      this.snackBar.open("Login Succeded", "OK", {duration: 2000})
    } else {
      this.snackBar.open("Invalid credentials", "OK", {duration: 2000})
    }
  }
}
