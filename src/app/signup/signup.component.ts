import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';
import { FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [SignupService]
})
export class SignupComponent implements OnInit {

  user: User = new User();
  users: User[];
  fname=0;
  lname=0;
  cnc=0;
  em=0;

  constructor(private router: Router, private signupService: SignupService) {

  }

  ngOnInit() {
  
    this.signupService.getUsers().subscribe(data => {
      this.users = data;
    })
  };

  createUser(): void {

    var flag = 0;
    var x=this.user.userName;
    if (this.user.contactNumber == null || this.user.firstName == null || this.user.lastName == null || this.user.linkedinUrl == null || this.user.password == null || this.user.userName == null || this.user.yearsOfExperience == null)
      alert("Please fill all fields");
    else {
        this.users.forEach(function (element) {
          if (x == element.userName) {
            flag = 1;
          }
      })
      if (flag == 0) {
        if(this.fname==0&&this.lname==0&&this.cnc==0&&this.em==0){
        this.signupService.createUser(this.user).subscribe(data => {
          alert("User Created Successfully");
          this.router.navigateByUrl("/login");
        })
      }
      else{
        alert("Invalid credentials")
      }
      }
      else {
        alert("User already exists!")
      }
    
    }
  }
  firstName(): void {
    var pattern = "^[A-Za-z -]+$";
    var x = this.user.firstName;
    if (x.match(pattern)) {
      document.getElementById("msg1").innerHTML = "";
      this.fname=0;
    }
    else {
      this.fname=1;
      document.getElementById("msg1").innerHTML = "Enter Valid First Name";
    }

  }
  lastName(): void {
    var pattern = "^[A-Za-z -]+$";
    var x = this.user.lastName;
    if (x.match(pattern)) {
      document.getElementById("msg2").innerHTML = "";
      this.lname=0;
    }
    else {
      this.lname=1;
      document.getElementById("msg2").innerHTML = "Enter Valid Last Name";
    }

  }
  contact(): void {
    var pattern = "^[0-9]{10}$";
    var x = this.user.contactNumber;
    if (x.match(pattern)) {
      document.getElementById('msg3').innerHTML = "";
      this.cnc=0;
    }
    else {
      this.cnc=1;
      document.getElementById('msg3').innerHTML = "Enter Valid Contact Number";
    }
  }
  validateEmail(): void {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = this.user.userName;
    if (re.test(String(email).toLowerCase())) {
      this.em=0;
      document.getElementById('msg4').innerHTML = "";
    }
    else {
      this.em=1;
      document.getElementById('msg4').innerHTML = "Invalid Email Address";
    }
  }
}
