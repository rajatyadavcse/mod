import { Component, OnInit } from '@angular/core';
import { Training } from '../models/training.model';
import { RouterEvent, Router } from '@angular/router';
import { UsercurrenttrainingsService } from './usercurrenttrainings.service';

@Component({
  selector: 'app-usercurrenttrainings',
  templateUrl: './usercurrenttrainings.component.html',
  styleUrls: ['./usercurrenttrainings.component.css'],
  providers:[UsercurrenttrainingsService]
})
export class UsercurrenttrainingsComponent implements OnInit {
  trainings: Training[];
  prog:number;
  constructor(private router:Router, private usercurrenttrainingsService: UsercurrenttrainingsService) { }
  ngOnInit() {
    if(sessionStorage.length == 0)
    {
      alert("You must login first!");
      document.location.pathname='/login';
    }
    else{
      this.usercurrenttrainingsService.getTrainings().subscribe(data=>{
         
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
  prompt(training: Training): void {
    this.prog = Number(prompt("Enter Progress(0-100): "));
        training.progress=this.prog;
        this.usercurrenttrainingsService.updateTraining(training).subscribe(data => {
          alert("Progress changed successfully! Page will automatically reload....");
          window.location.reload();
        })
   
    }
  }
