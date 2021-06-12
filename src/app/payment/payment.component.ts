import { Component, OnInit } from '@angular/core';
import { Training } from '../models/training.model';
import { PaymentService } from './payment.service';
import { Payment } from '../models/payment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers: [PaymentService]
})
export class PaymentComponent implements OnInit {
  id;
training:Training=new Training();
payment:Payment=new Payment();
  
constructor(private router:Router, private paymentService: PaymentService) { }

  ngOnInit() {
    this.id=sessionStorage.getItem('payment');
    this.paymentService.getTraining(this.id).subscribe(data=>{
      this.training=data;
   
    })
  }
  logout(): void{
    sessionStorage.clear();
    localStorage.setItem('loadData','"/"');
    window.location.pathname = '/loadingscreen';
    // alert("You will be now logged out!");

  }
  func(){
    this.payment.amount=this.training.fees;
    this.payment.mentorId=this.training.mentor.id;
    this.payment.mentorName=this.training.mentor.firstName+" "+this.training.mentor.lastName;
    this.payment.remarks=this.training.technology.remarks;
    this.payment.skillName=this.training.skill.map(skill=>skill.name).toString();
    this.payment.totalAmounToMentor=0;
    this.payment.trainingId=this.training.id;
    this.paymentService.postPayment(this.payment).subscribe(data=>{
      alert('You have been enrolled!');
      this.router.navigateByUrl('/usercurrenttraining');
    })
    this.training.user.push(JSON.parse(sessionStorage.getItem('name')));
    this.training.payment.push(this.payment);
    this.paymentService.updateTraining(this.training).subscribe(data=>{
       
      
    });
  }

}
