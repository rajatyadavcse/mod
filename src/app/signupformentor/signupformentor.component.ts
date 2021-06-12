import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { SignupForMentorService } from './signupformentor.service';
import { Mentor } from '../models/mentor.model';

@Component({
  selector: 'app-signupformentor',
  templateUrl: './signupformentor.component.html',
  styleUrls: ['./signupformentor.component.css'],
  providers:[SignupForMentorService]
})
export class SignupformentorComponent implements OnInit {
  mentor: Mentor=new Mentor();
  mentors:Mentor[];
  fname=0;
  lname=0;
  cnc=0;
  em=0;
  constructor(private router: Router, private signupformentorService: SignupForMentorService) { }
  ngOnInit() {
  
    this.signupformentorService.getMentors().subscribe(data => {
      this.mentors = data;
    })
  };

  createMentor(): void {

    var flag = 0;
    var x=this.mentor.userName;
    if (this.mentor.contactNumber == null || this.mentor.firstName == null || this.mentor.lastName == null || this.mentor.linkedinUrl == null || this.mentor.password == null || this.mentor.userName == null || this.mentor.yearsOfExperience == null)
      alert("Please fill all fields");
    else {
        this.mentors.forEach(function (element) {
          if (x == element.userName) {
            flag = 1;
          }
      })
      if (flag == 0) {
        if(this.fname==0&&this.lname==0&&this.cnc==0&&this.em==0){
        this.signupformentorService.createMentor(this.mentor).subscribe(data => {
          alert("Mentor Created Successfully");
          this.router.navigateByUrl("/login");
        })
      }
      else{
        alert("Invalid credentials")
      }
      }
      else {
        alert("Mentor already exists!")
      }
    
    }
  }
  firstName(): void {
    
    var pattern = "^[A-Za-z -]+$";
    var x = this.mentor.firstName;
    if (x.match(pattern)) {
      this.fname=0;
      document.getElementById("msg1").innerHTML = "";
    }
    else {
      this.fname=1;
      document.getElementById("msg1").innerHTML = "Enter Valid First Name";
    }

  }
  lastName(): void {
 
    var pattern = "^[A-Za-z -]+$";
    var x = this.mentor.lastName;
    if (x.match(pattern)) {
      this.lname=0;
      document.getElementById("msg2").innerHTML = "";
    }
    else {
      this.lname=1;
      document.getElementById("msg2").innerHTML = "Enter Valid Last Name";
    }

  }
  contact(): void {
  
    var pattern = "^[0-9]{10}$";
    var x = this.mentor.contactNumber;
    if (x.match(pattern)) {
      this.cnc=0;
      document.getElementById('msg3').innerHTML = "";
    }
    else {
      this.cnc=1;
      document.getElementById('msg3').innerHTML = "Enter Valid Contact Number";
    }
  }
  validateEmail(): void {
   
     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = this.mentor.userName;
    if (re.test(String(email).toLowerCase())) {
      document.getElementById('msg4').innerHTML = "";
      this.em=0;
    }
    else {
      this.em=1;
      document.getElementById('msg4').innerHTML = "Invalid Email Address";
    }
  }}
