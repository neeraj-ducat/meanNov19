import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp.model';
import { EmpService } from '../emp.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-new-emp',
  templateUrl: './new-emp.component.html',
  styleUrls: ['./new-emp.component.css']
})
export class NewEmpComponent implements OnInit {

  // Object to receive form data
  emp: Emp;
  constructor(private es: EmpService,
    private alertService: AlertService) { 
    this.emp = new Emp();
  }

  public save()
  {
    this.es.save(this.emp)
      .subscribe(data=>{
        this.alertService.success('successfully saved.');
        this.clear();
      });

  }
  private clear(){
    this.emp.name = '';
    this.emp.job = '';
    this.emp.salary = 0;
  }
  ngOnInit() {
  }

}
