import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  // Array to store the receive users.
  users: User[];
  constructor(private dataService: DataService,
    private spinner: NgxSpinnerService){

  }
  public ngOnInit()
  {
    this.spinner.show();
    this.dataService.fetchAllUsers()
      .subscribe((result)=>{
       this.users = result;
       this.spinner.hide();
    });
  }
}
