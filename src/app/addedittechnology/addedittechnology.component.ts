import { Component, OnInit } from '@angular/core';
import { AddedittechnologyService } from './addedittechnology.service';
import { Router } from '@angular/router';
import { Technology } from '../models/technology.model';

@Component({
  selector: 'app-addedittechnology',
  templateUrl: './addedittechnology.component.html',
  styleUrls: ['./addedittechnology.component.css'],
  providers: [AddedittechnologyService]
})
export class AddedittechnologyComponent implements OnInit {
  technology:Technology[];
  tech:Technology=new Technology();
  constructor(private router: Router,private addedittechnologyService: AddedittechnologyService) { }

  ngOnInit() {
    if(sessionStorage.length == 0)
    {
      alert("You must login first!");
      document.location.pathname='/login';
    }
    else{
    this.addedittechnologyService.getTechnology().subscribe(data => {
      this.technology=data;
  })}
  }
  
  prompt(techId): void {
  var fees = prompt("Enter Fees: ");
    this.addedittechnologyService.getTech(techId).subscribe(data => {
      this.tech  = data;
    
      data.price = fees;
      this.addedittechnologyService.updateTech(this.tech).subscribe(data => {
        alert("Fees changed successfully! Page will automatically reload....");
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
  createTechnology(techno:Technology):void{
    this.addedittechnologyService.createTechnology(techno).subscribe(data=>{
      alert("Added");   
      window.location.pathname='/addedittechnology';
    })
  }
  deleteTechnology(techno: Technology):void{
this.addedittechnologyService.deleteTechnology(techno).subscribe( data => {
  this.technology = this.technology.filter(u => u !== techno);})

  }
}
