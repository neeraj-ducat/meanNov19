import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  // reference of the currently loggedIn users.
  current: User;
  authenticated: boolean = false;
  constructor(private http: HttpClient) 
  {
   this.current = null;
  }
  // Method to register a user
  register(u: User) :Observable<any>
  {
    // post method of the httpService is invoked
   return this.http.post(environment.apiUrl+'users',u);
  }

  public setCurrentUser(user: User){
    if(this.current === null)
       this.current = new User();
    this.current.mailId = user.mailId;
    this.current.name = user.name;
    this.current._id = user._id;
    this.current.imageUrl = user.imageUrl;
    this.authenticated = true;
    
  }

  // Method to login a user
  login(u: User) :Observable<User> {
   const url = environment.apiUrl+"users/login";
   return this.http.post<User>(url,u);
  }
   // Method to update a user
   updateUser(u: User) :Observable<any> {
    return this.http.put<User>(environment.apiUrl+'users',u);
   }
    // Method to update profileImage
    updateProfileImage() :Observable<any> {
      let data= {'id' : this.current._id, 'profileImage': this.current.imageUrl};
      console.log('updating ',data);
      return this.http.put<User>(environment.apiUrl+'users/profileImage',data);
     }
}
