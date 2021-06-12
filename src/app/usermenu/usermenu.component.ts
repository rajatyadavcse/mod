import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsermenuService } from './usermenu.service';
import { Training } from '../models/training.model';
import { Mentor } from '../models/mentor.model';
import { Technology } from '../models/technology.model';


@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.component.html',
  styleUrls: ['./usermenu.component.css'],
  providers:[ UsermenuService]

})
export class UsermenuComponent implements OnInit {
  training:Training=new Training();
  trainings:Training[];
  show:boolean=false;
  techName:string;
  technology:Technology[];
  constructor(private router:Router, private usermenuService: UsermenuService) { }

  ngOnInit() {
    if(sessionStorage.length == 0)
    {
      alert("You must login first!");
      document.location.pathname='/login';
    }
    else{
      this.usermenuService.getTechnology().subscribe(data=>{
        this.technology=data;
     
        
      })
    }
  }
  logout(): void{
    sessionStorage.clear();
    localStorage.setItem('loadData','"/"');
    window.location.pathname = '/loadingscreen';
    // alert("You will be now logged out!");

  }
  tprofile(mentorId)
  {

    sessionStorage.setItem('trainerProfile',mentorId);
    window.location.pathname="/trainerprofile";
  }
  search():void{
    this.show=true;
    this.usermenuService.getTrainingsByDate(this.training.startDate, this.training.endDate).subscribe(data=>{
      this.trainings=data.filter(u => u.technology.techName==this.techName);

     
      
    })
    
  }
  register(id):void{
   
    sessionStorage.setItem('payment',id);
    window.location.pathname="/payment";
  }
  }
