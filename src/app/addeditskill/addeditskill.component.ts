import { Component, OnInit } from '@angular/core';
import { AddeditskillService } from './addeditskill.service';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-addeditskill',
  templateUrl: './addeditskill.component.html',
  styleUrls: ['./addeditskill.component.css'],
  providers: [AddeditskillService]
})
export class AddeditskillComponent implements OnInit {
skills: Skill[];
skill: Skill=new Skill();
  constructor(private addeditskillService: AddeditskillService) { }

  ngOnInit() {
    if(sessionStorage.length == 0)
    {
      alert("You must login first!");
      document.location.pathname='/login';
    }
    else{
    this.addeditskillService.getSkills().subscribe(data => {
      this.skills=data;
  })}
  }
  logout(): void{
    sessionStorage.clear();
    localStorage.setItem('loadData','"/"');
    window.location.pathname = '/loadingscreen';
    // alert("You will be now logged out!");

  }
  createSkill(skil:Skill):void{
    this.addeditskillService.createSkill(skil).subscribe(data=>{
      alert("Added");   
      window.location.pathname='/addeditskills';
    })
  }
  deleteSkill(ski: Skill):void{
this.addeditskillService.deleteSkill(ski).subscribe( data => {
  this.skills = this.skills.filter(u => u !== ski);})

  }
}
