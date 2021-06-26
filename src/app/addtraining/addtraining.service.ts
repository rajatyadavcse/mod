import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';
import { Training } from '../models/training.model';
import { Technology } from '../models/technology.model';
import { Mentor } from '../models/mentor.model';
import { Skill } from '../models/skill.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
  
  export class AddtrainingService {
  
    training: Training=new Training();
    constructor(private http:HttpClient) {}
  
    private trainingUrl = 'https://modbackend.herokuapp.com/trainings';
    private technologyUrl= 'https://modbackend.herokuapp.com/technologies';
    private mentorUrl='https://modbackend.herokuapp.com/mentors';
    private skillUrl='https://modbackend.herokuapp.com/skills';
    //private userUrl = '/api';
  
    public getTrainings() {
      return this.http.get<Training[]>(this.trainingUrl);
    }
    public getTechnologies(){
      return this.http.get<Technology[]>(this.technologyUrl);
    }
    public getMentors(){
      return this.http.get<Mentor[]>(this.mentorUrl);
    }
    public getSkills(){
      return this.http.get<Skill[]>(this.skillUrl);
    }

    public getTraining(trainId){
    return this.http.get<Training>(this.trainingUrl + "/" + trainId);
    }
    public updateTraining(train) {
      return this.http.put<Training>(this.trainingUrl+ "/"+ train.id, train);
    }
    public deleteTraining(training) {
      return this.http.delete(this.trainingUrl + "/"+ training.id);
    }
  
    public createTraining(training) {
      return this.http.post<Training>(this.trainingUrl, training);
    }
  }