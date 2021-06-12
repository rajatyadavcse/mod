import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Training } from '../models/training.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class MentorcompletedtrainingsService {

  constructor(private http:HttpClient) { }
  private trainingUrl = 'http://localhost:8022/trainings';
    //private userUrl = '/api';
    user=JSON.parse(sessionStorage.getItem("name"));
    id=this.user.id;
    public getTrainings() {
       (this.id);
      return this.http.get<Training[]>(this.trainingUrl+"/findTrainingByMentorId/"+this.id);
    }
  }
