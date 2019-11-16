import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

const server_url = 'https://jsonplaceholder.typicode.com/users';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // To Fetch users data from the server
  public fetchAllUsers(): Observable<User[]>
  {
    return this.http.get<User[]>(server_url);
  }
}
