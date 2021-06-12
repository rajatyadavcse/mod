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
  
    private userUrl = 'http://localhost:8022/users';
    //private userUrl = '/api';
    private mentorUrl = 'http://localhost:8022/mentors';
    public getUsers(userName, password, role) {
      return this.http.get<User>(this.userUrl + "/" + userName + "/" + password+"/"+role);
    }
    
    public getMentors(userName, password)
    {
      return this.http.get<Mentor>(this.mentorUrl+ "/"+ userName+"/"+password);
    }

  }