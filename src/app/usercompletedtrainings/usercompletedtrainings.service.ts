import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Training } from '../models/training.model';
import { User } from '../models/user.model';
import { Mentor } from '../models/mentor.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UsercompletedtrainingsService {

  constructor(private http:HttpClient) { }
  private trainingUrl = 'https://modbackend.herokuapp.com/trainings';
  private mentorUrl = 'https://modbackend.herokuapp.com/mentors';
    //private userUrl = '/api';
    user=JSON.parse(sessionStorage.getItem("name"));
    id=this.user.id;
    public getTrainings() {
      
      return this.http.get<Training[]>(this.trainingUrl+"/findTrainingByUserId/"+this.id);
    }
    // public getMentor(id1){
    //   return this.http.get<Mentor[]>(this.mentorUrl+"/"+id1);
    // }
}
