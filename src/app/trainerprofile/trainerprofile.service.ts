import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Mentor } from '../models/mentor.model';
import { Training } from '../models/training.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TrainerprofileService {
  constructor(private http:HttpClient) {}
  
  private mentorUrl= 'https://modbackend.herokuapp.com/mentors';
  private trainingUrl='https://modbackend.herokuapp.com/trainings/findTrainingByMentorId';
  
  getMentor(mentorId){
    return this.http.get<Mentor>(this.mentorUrl+"/"+mentorId);
  }
  getTraining(mentorId1){
    return this.http.get<Training[]>(this.trainingUrl+"/"+mentorId1)
  }
}
