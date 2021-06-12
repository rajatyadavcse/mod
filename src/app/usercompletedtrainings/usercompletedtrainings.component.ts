import { Component, OnInit } from '@angular/core';
import { UsercompletedtrainingsService } from './usercompletedtrainings.service';
import { Training } from '../models/training.model';
import { Router } from '@angular/router';
import { Mentor } from '../models/mentor.model';
import { UsercurrenttrainingsService } from '../usercurrenttrainings/usercurrenttrainings.service';

@Component({
  selector: 'app-usercompletedtrainings',
  templateUrl: './usercompletedtrainings.component.html',
  styleUrls: ['./usercompletedtrainings.component.css'],
  providers: [UsercompletedtrainingsService]
})
export class UsercompletedtrainingsComponent implements OnInit {
  trainings: Training[];
  mentor: Mentor[];
  mentorId;
  rating: number;
  constructor(private router: Router,private usercurrenttrainingService: UsercurrenttrainingsService, private usercompletedtrainingsService: UsercompletedtrainingsService) { }
  
  ngOnInit() {
    if(sessionStorage.length == 0)
    {
      alert("You must login first!");
      document.location.pathname='/login';
    }
    else{
      this.usercompletedtrainingsService.getTrainings().subscribe(data=>{
         
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
  prompt(training: Training): void {
    this.rating = Number(prompt("Enter Rating(0-10): "));
        training.mentor.rating=this.rating;
        this.usercurrenttrainingService.updateTraining(training).subscribe(data => {
          alert("Rating changed successfully! Page will automatically reload....");
          window.location.reload();
        })
   
    }
  }