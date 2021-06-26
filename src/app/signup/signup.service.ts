import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
  
  export class SignupService {
  
  
    constructor(private http:HttpClient) {}
  
    private userUrl = 'https://modbackend.herokuapp.com/users';
    //private userUrl = '/api';
  
    public getUsers() {
      return this.http.get<User[]>(this.userUrl);
    }
  
    public deleteUser(user) {
      return this.http.delete(this.userUrl + "/"+ user.id);
    }
  
    public createUser(user) {
      return this.http.post<User>(this.userUrl, user);
    }
  
  }