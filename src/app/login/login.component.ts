import { Component, OnInit } from '@angular/core';
import { Mentor } from '../models/mentor.model';
import { User } from '../models/user.model';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
  mentor: Mentor=new Mentor();
  user: User=new User();

  role:string;
  userName:string;
  password:string;

  constructor(private router: Router, private loginService: LoginService) {

  }

  ngOnInit() {
  
  };
  check(): void{
  if(this.role==null|| this.userName==null, this.password==null){
    alert("Please fill all fields");
  }
  else
  {
    if(this.role.match('User'))
    {
      this.loginService.getUsers(this.userName, this.password, this.role).subscribe(data=>{
        //  
        if(data==null)
        alert("Invalid");
        else
        {
        // alert("User login Successfull");
        if(data.active==false){
          alert('Your access has been revoked by the administrator!')
        }
        else{
        let toStore = JSON.stringify(data);
        sessionStorage.setItem("name",toStore);
        localStorage.setItem('loadData','"/usermenu"');
        this.router.navigateByUrl("/loadingscreen");
        }}
      })
    }
    else if(this.role.match('Mentor'))
    {
    this.loginService.getMentors(this.userName, this.password).subscribe(data=>{
      if(data==null)
      alert("Invalid");
      else
      {
        if(data.active==false){
          alert('Your access has been revoked by the administrator!')
        }
        else{
      alert("Mentor login Succesfull");
      let toStore = JSON.stringify(data);
      sessionStorage.setItem('name',toStore);
      localStorage.setItem('loadData','"/mentormenu"');
      this.router.navigateByUrl("/loadingscreen");
    }}
  })
    }
    else{
      this.loginService.getUsers(this.userName, this.password, this.role).subscribe(data=>{
        if(data==null)
        alert("Invalid");
        else
        {
        alert("Admin login Succesfull");
        let toStore = JSON.stringify(data);
        sessionStorage.setItem("name",toStore);
        localStorage.setItem('loadData','"/adminmenu"');
        this.router.navigateByUrl("/loadingscreen");
        
      }
    })
    }
  }

  }
}
