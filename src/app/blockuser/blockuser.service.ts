import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class BlockuserService {

  constructor(private http:HttpClient) { }
  private userUrl = 'http://localhost:8022/users';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }
  public getUser(id)
  {
    return this.http.get<User>(this.userUrl+"/"+id);
  }
  public updateUser(user)
  {
    return this.http.put<User>(this.userUrl+"/"+user.id, user);
  }
  // public deleteTechnology(technologly) {
  //   return this.http.delete(this.technologyUrl + "/"+ technologly.id);
  // }

  // public createTechnology(technologly) {
  //   return this.http.post<Technology>(this.technologyUrl, technologly);
  // }



}
