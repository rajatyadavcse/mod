import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Mentor } from '../models/mentor.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class BlockmentorService {

  constructor(private http:HttpClient) { }
  private mentorUrl="http://localhost:8022/mentors";
  
  public getMentors() {
    return this.http.get<Mentor[]>(this.mentorUrl);
  }
  public getMentor(id)
  {
    return this.http.get<Mentor>(this.mentorUrl+"/"+id);
  }
  public updateMentor(mentor)
  {
    return this.http.put<Mentor>(this.mentorUrl+"/"+mentor.id, mentor);
  }
}
