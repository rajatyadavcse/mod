import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Mentor } from '../models/mentor.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
  
  export class LoginService {
  
  
    constructor(private http:HttpClient) {}
  
    private userUrl = 'https://modbackend.herokuapp.com/users';
    //private userUrl = '/api';
    private mentorUrl = 'https://modbackend.herokuapp.com/mentors';
    public getUsers(userName, password, role) {
      return this.http.get<User>(this.userUrl + "/" + userName + "/" + password+"/"+role);
    }
    
    public getMentors(userName, password)
    {
      return this.http.get<Mentor>(this.mentorUrl+ "/"+ userName+"/"+password);
    }

  }