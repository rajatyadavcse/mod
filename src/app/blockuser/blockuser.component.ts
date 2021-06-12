import { Component, OnInit } from '@angular/core';
import { BlockuserService } from './blockuser.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';


@Component({
  selector: 'app-blockuser',
  templateUrl: './blockuser.component.html',
  styleUrls: ['./blockuser.component.css'],
  providers: [BlockuserService]
})
export class BlockuserComponent implements OnInit {
  users:User=new User();
  user:User[];
  userArr:User[];
  us:User=new User();
  active:boolean=false;

  constructor(private router: Router, private blockuserService: BlockuserService) { }

  ngOnInit() {
    if(sessionStorage.length == 0)
    {
      alert("You must login first!");
      document.location.pathname='/login';
    }
    else{
    this.blockuserService.getUsers().subscribe(data=>{
    
      this.userArr= data.filter(data=>data.role=="User");
    
    
  })}      
  }
  block(id):void{
    this.active=false;
    this.blockuserService.getUser(id).subscribe(data=>{
      this.us=data;
      this.us.active=this.active;
      this.blockuserService.updateUser(this.us).subscribe(data=>{
        alert('User Blocked!');
        window.location.reload();      
      })
    })
  }
  unblock(id):void{
    this.active=true;
    this.blockuserService.getUser(id).subscribe(data=>{
      this.us=data;
      this.us.active=this.active;
      this.blockuserService.updateUser(this.us).subscribe(data=>{
        alert('User Unblocked');
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
