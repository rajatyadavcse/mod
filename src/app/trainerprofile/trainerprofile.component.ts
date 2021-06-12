import { Component, OnInit } from '@angular/core';
import { TrainerprofileService } from './trainerprofile.service';
import { Mentor } from '../models/mentor.model';
import { Router } from '@angular/router';
import { Training } from '../models/training.model';

@Component({
  selector: 'app-trainerprofile',
  templateUrl: './trainerprofile.component.html',
  styleUrls: ['./trainerprofile.component.css']
})
export class TrainerprofileComponent implements OnInit {
  mentorId;
  mentor:Mentor = new Mentor();
  training:Training[];
  constructor(private router:Router, private trainerprofileService: TrainerprofileService) { }

  ngOnInit() {

    this.mentorId=sessionStorage.trainerProfile;
    this.trainerprofileService.getMentor(this.mentorId).subscribe(data=>{
      this.mentor=data;
      
    });
    this.trainerprofileService.getTraining(this.mentorId).subscribe(data=>{
      this.training=data;
   
      
    })
    
}
  logout(): void{
    sessionStorage.clear();
    localStorage.setItem('loadData','"/"');
    window.location.pathname = '/loadingscreen';
    // alert("You will be now logged out!");

  }
}
