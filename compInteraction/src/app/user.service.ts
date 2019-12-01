import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

const api_url = 'https://jsonplaceholder.typicode.com/users/';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public fetchUsers(): Observable<User[]>
  {
    return this.http.get<User[]>(api_url);
  }
}
