import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Training } from '../models/training.model';
import { Technology } from '../models/technology.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsermenuService {
  constructor(private http:HttpClient) {}
  
  private trainingUrl = 'https://modbackend.herokuapp.com/trainings';
  //private userUrl = '/api';
  private technologyUrl= 'https://modbackend.herokuapp.com/technologies';
  public getCompletedTrainings() {
    return this.http.get<Training[]>(this.trainingUrl);
  }
  public getTrainingsByDate(startDate, endDate)
  {
    return this.http.get<Training[]>(this.trainingUrl+"/findByStartDateBetween/"+startDate+"/"+endDate);
  }
  public getTechnology()
  {
    return this.http.get<Technology[]>(this.technologyUrl);
  }

}
