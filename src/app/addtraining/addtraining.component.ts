import { Component, OnInit } from '@angular/core';
import { AddtrainingService } from './addtraining.service';
import { Training } from '../models/training.model';
import { Mentor } from '../models/mentor.model';
import { Technology } from '../models/technology.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-addtraining',
  templateUrl: './addtraining.component.html',
  styleUrls: ['./addtraining.component.css'],
  providers: [AddtrainingService]
})
export class AddtrainingComponent implements OnInit {
  trainings:Training[];
  training:Training=new Training();
  mentors:Mentor[];
  technologies:Technology[];
  skills:Skill[];
  
  constructor(private addtrainingService: AddtrainingService) { }

  ngOnInit() {
    if(sessionStorage.length == 0)
    {
      alert("You must login first!");
      document.location.pathname='/login';
    }
    else{
    this.addtrainingService.getTrainings().subscribe(data => {
      this.trainings=data;

  })
 
  
  this.addtrainingService.getMentors().subscribe(data=>{
    this.mentors=data;
  })
  this.addtrainingService.getTechnologies().subscribe(data=>{
    this.technologies=data;

  })
  this.addtrainingService.getSkills().subscribe(data=>{
    this.skills=data;
  })
}
  }
  logout(): void{
    sessionStorage.clear();
    localStorage.setItem('loadData','"/"');
    window.location.pathname = '/loadingscreen';
    // alert("You will be now logged out!");

  }
  createTraining(train:Training):void{

    
    this.addtrainingService.createTraining(train).subscribe(data=>{
      
      alert("Added"); 
      window.location.pathname='/addedittraining';
    })
  }
  deleteTraining(train: Training):void{
this.addtrainingService.deleteTraining(train).subscribe( data => {
  this.trainings = this.trainings.filter(u => u !== train);})

  }
}
