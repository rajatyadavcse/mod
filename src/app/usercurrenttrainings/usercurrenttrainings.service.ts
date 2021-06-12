import { Injectable } from '@angular/core';

import { Training } from '../models/training.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UsercurrenttrainingsService {

  constructor(private http:HttpClient) { }
  private trainingUrl = 'http://localhost:8022/trainings';
    user=JSON.parse(sessionStorage.getItem("name"));
    id=this.user.id;
    public getTrainings() {
    
      return this.http.get<Training[]>(this.trainingUrl+"/findTrainingByUserId/"+this.id);
    }
    public updateTraining(training)
    {
      return this.http.put<Training>(this.trainingUrl+"/"+training.id,training);
    }
}
