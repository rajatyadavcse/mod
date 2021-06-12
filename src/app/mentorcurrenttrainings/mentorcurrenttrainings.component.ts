import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MentorcompletedtrainingsService } from '../mentorcompletedtrainings/mentorcompletedtrainings.service';
import { Training } from '../models/training.model';

@Component({
  selector: 'app-mentorcurrenttrainings',
  templateUrl: './mentorcurrenttrainings.component.html',
  styleUrls: ['./mentorcurrenttrainings.component.css']
})
export class MentorcurrenttrainingsComponent implements OnInit {

  trainings:Training[];
  constructor(private router: Router, private mentorcurrenttrainingsService: MentorcompletedtrainingsService) { }

  ngOnInit() {
    if(sessionStorage.length == 0)
    {
      alert("You must login first!");
      document.location.pathname='/login';
    }
    else{
      this.mentorcurrenttrainingsService.getTrainings().subscribe(data=>{
         
        this.trainings=data.filter(u=>u.status=='Current'&&u.progress!=100);
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
