import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Mentor } from '../models/mentor.model';

@Component({
  selector: 'app-mentormenu',
  templateUrl: './mentormenu.component.html',
  styleUrls: ['./mentormenu.component.css']
})
export class MentormenuComponent implements OnInit {
  mentor:Mentor[];

constructor() { 
  if(sessionStorage.length!=0)
  {
    this.mentor=JSON.parse(sessionStorage.name);
  }
}

  ngOnInit() {
    if(sessionStorage.length == 0)
    {
      alert("You must login first!");
      document.location.pathname='/login';
    }
  }
  logout(): void{
    sessionStorage.clear();
    localStorage.setItem('loadData','"/"');
    window.location.pathname = '/loadingscreen';
    // alert("You will be now logged out!");

  }

}
