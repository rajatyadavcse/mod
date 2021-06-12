import { Component, OnInit } from '@angular/core';
import { MentorcompletedtrainingsService } from './mentorcompletedtrainings.service';
import { Router } from '@angular/router';
import { Training } from '../models/training.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-mentorcompletedtrainings',
  templateUrl: './mentorcompletedtrainings.component.html',
  styleUrls: ['./mentorcompletedtrainings.component.css'],
  providers: [MentorcompletedtrainingsService]
})
export class MentorcompletedtrainingsComponent implements OnInit {
  trainings: Training[];
  user: User[];
  constructor(private router: Router, private mentorcompletedtrainingsService: MentorcompletedtrainingsService) { }
  ngOnInit() {
    if(sessionStorage.length == 0)
    {
      alert("You must login first!"); 
      document.location.pathname='/login';
    }
    else{
      this.mentorcompletedtrainingsService.getTrainings().subscribe(data=>{
        this.trainings=data.filter(u=>u.status=='Completed'&&u.progress==100);
      })
        
    }
  }
  logout(): void{
    sessionStorage.clear();
    localStorage.setItem('loadData','"/"');
    window.location.pathname = '/loadingscreen';
    // alert("You will be now logged out!");

  }
}
