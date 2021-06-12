import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Skill } from '../models/skill.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AddeditskillService {
  private skillUrl="http://localhost:8022/skills";
  constructor(private http: HttpClient) { }
  public getSkills(){
    return this.http.get<Skill[]>(this.skillUrl);
    
  }
  public deleteSkill(skill) {
    return this.http.delete(this.skillUrl + "/"+ skill.id);
  }

  public createSkill(skill) {
    return this.http.post<Skill>(this.skillUrl, skill);
  }
}
