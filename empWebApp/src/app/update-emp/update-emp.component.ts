import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';
import { Emp } from '../emp.model';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {

  // object to be updated
  emp: Emp;
  constructor(private empService: EmpService,
    private alertService: AlertService,
    private router: Router) { 
      this.emp = this.empService.emp;
    }

  public update()
  {
    this.empService.update(this.emp)
        .subscribe(data => {
          this.alertService.success('successfully udpated');
          this.router.navigate(['view']);
        });
  }  
  ngOnInit() {
  }

}
