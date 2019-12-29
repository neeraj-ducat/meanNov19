import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Emp } from '../emp.model';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit {

  // array to store employees
  emps: Emp[];
  constructor(private es: EmpService,
    private alertService: AlertService,
    private router: Router) { }

  ngOnInit() {
    this.es.getAllEmp()
        .subscribe((data)=>{
            this.emps = data;
        });
  }

  // to manage the emp deletion
  public delete(emp: Emp)
  {
    // Get the emp removed on the server
    this.es.remove(emp._id)
      .subscribe(data=>{
        // Remove the emp from the array so it gets removed from the view table as well.
        this.emps.splice(this.emps.indexOf(emp), 1);
        // notification is displayed
        this.alertService.success('successfully removed.');
      });
    
  }

  public edit(emp: Emp) {
    // store the object to be updated in the service
    this.es.emp = emp;
    // change the route to update
    this.router.navigate(['update']);
  }

}
