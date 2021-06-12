import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';
import { Technology } from '../models/technology.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
  
  export class AddedittechnologyService {
  
    technologly: Technology=new Technology();
    constructor(private http:HttpClient) {}
  
    private technologyUrl = 'http://localhost:8022/technologies';
    //private userUrl = '/api';
  
    public getTechnology() {
      return this.http.get<Technology[]>(this.technologyUrl);
    }
    public getTech(techId){
    return this.http.get<Technology>(this.technologyUrl + "/" + techId);
    }
    public updateTech(tech) {
      return this.http.put<Technology>(this.technologyUrl+ "/"+ tech.id, tech);
    }
    public deleteTechnology(technologly) {
      return this.http.delete(this.technologyUrl + "/"+ technologly.id);
    }
  
    public createTechnology(technologly) {
      return this.http.post<Technology>(this.technologyUrl, technologly);
    }
  }