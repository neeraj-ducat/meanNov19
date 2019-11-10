import { Injectable } from '@angular/core';
import { Emp } from './emp.model';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  emps: Emp[];
  counter: number = 0;
  constructor() {
    this.emps = Array();
   }
  
   public add(e: Emp)
   {
     e.id = ++this.counter;
     this.emps.push(e);
   }
}
