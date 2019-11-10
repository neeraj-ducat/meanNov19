import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Emp } from '../emp.model';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  emps: Emp[];
  constructor(private empService: EmpService) { 
    this.emps = empService.emps;
  }

  ngOnInit() {
  }

}
