import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // member to store the reference of the currently logged in user
  current:User;
  constructor() {
    this.current ={id:1, name:'Amit', email:'a@b.com', password:'1234', role:'admin'};
   }
}
