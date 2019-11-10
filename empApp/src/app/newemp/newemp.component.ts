import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Emp } from '../emp.model';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-newemp',
  templateUrl: './newemp.component.html',
  styleUrls: ['./newemp.component.css']
})
export class NewempComponent implements OnInit {

  // object to receive form data
  emp: Emp = new Emp();

  constructor(private empService: EmpService,
    private alertService: AlertService) { }

  ngOnInit() {
  }

  public save()
  {
    let toBeSaved: Emp = Object.assign({}, this.emp);
    this.empService.add(toBeSaved);
    this.reset();
    this.alertService.success('Successfully added.');
  }

  private reset(){
    this.emp.name='';
    this.emp.job='';
    this.emp.salary=0;
  }
}
