import { Component } from '@angular/core';
import { User } from './user.model';
import { AlertService } from 'ngx-alerts';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // object to receive form data
  user: User;

  constructor(private alertService: AlertService)
  {
    this.user = new User();
  }

  public register(frm : FormGroup)
  {
    if(frm.invalid) {
        for (let i in frm.controls) {
          frm.controls[i].markAsTouched();
        }
    } else {
      
      this.alertService.success(this.user.name+' is registered.');

    }
    
   }
}
