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
  
  export class SignupForMentorService {
  
  
    constructor(private http:HttpClient) {}
  
    private mentorUrl = 'http://localhost:8022/mentors';
    //private userUrl = '/api';

  
    public createMentor(mentor) {
      return this.http.post<Mentor>(this.mentorUrl, mentor);
    }
    public getMentors() {
      return this.http.get<Mentor[]>(this.mentorUrl);
    }
  
  }