import { Injectable } from '@angular/core';

import { Emp } from './emp.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const api_url = 'http://localhost:3000/emps';
@Injectable({
  providedIn: 'root'
})
export class EmpService {

  // emp object to be updated
  emp: Emp; 

  constructor(private http: HttpClient) {
  }

   // to fetch all Employees from the server
   public getAllEmp(): Observable<Emp[]>
   {
    return this.http.get<Emp[]>(api_url);
   }
  // to fetch an Employee using id from the server
  public getEmpById(id:number): Observable<Emp>
  {
    let url = api_url+'/'+id;
    return this.http.get<Emp>(url);
  }
  // to save an Employee to the server
  public save(emp: Emp): Observable<Emp>
  {
    return this.http.post<Emp>(api_url, emp);
  }
  // to update an Employee to the server
  public update(emp: Emp): Observable<Emp>
  {
    let url = api_url+'/'+emp.id;
    console.log('sending put request to ', url);
    return this.http.put<Emp>(url, emp);
  }
  // to remove an Employee on the server
  public remove(id: number): Observable<{}>
  {
    let url = api_url+'/'+id;
    return this.http.delete<{}>(url);
  }
}
