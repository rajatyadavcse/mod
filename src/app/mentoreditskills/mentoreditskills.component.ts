import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentoreditskills',
  templateUrl: './mentoreditskills.component.html',
  styleUrls: ['./mentoreditskills.component.css']
})
export class MentoreditskillsComponent implements OnInit {

  constructor() { }

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
