import { Component, OnInit } from '@angular/core';
import { BlockmentorService } from './blockmentor.service';
import { Mentor } from '../models/mentor.model';

@Component({
  selector: 'app-blockmentor',
  templateUrl: './blockmentor.component.html',
  styleUrls: ['./blockmentor.component.css'],
  providers: [BlockmentorService]
})
export class BlockmentorComponent implements OnInit {
  mentorArr: Mentor[];
  mentor:Mentor=new Mentor();
  active:boolean=false;
  constructor(private blockmentorService: BlockmentorService) { }

  ngOnInit() {
    if(sessionStorage.length == 0)
    {
      alert("You must login first!");
      document.location.pathname='/login';
    }
    else{
      this.blockmentorService.getMentors().subscribe(data=>{
    
        this.mentorArr= data.filter(data=>data.role=="Mentor");
      
      })
    }
  }
  block(id):void{
    this.active=false;
    this.blockmentorService.getMentor(id).subscribe(data=>{
      this.mentor=data;
      this.mentor.active=this.active;
      this.blockmentorService.updateMentor(this.mentor).subscribe(data=>{
        alert('Mentor Blocked!');
        window.location.reload();      
      })
    })
  }
  unblock(id):void{
    this.active=true;
    this.blockmentorService.getMentor(id).subscribe(data=>{
      this.mentor=data;
      this.mentor.active=this.active;
      this.blockmentorService.updateMentor(this.mentor).subscribe(data=>{
        alert('Mentor Unblocked!');
        window.location.reload();
      })
    })
  }

  logout(): void{
    sessionStorage.clear();
    localStorage.setItem('loadData','"/"');
    window.location.pathname = '/loadingscreen';
    // alert("You will be now logged out!");

  }
}
