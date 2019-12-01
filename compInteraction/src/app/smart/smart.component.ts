import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.css']
})
export class SmartComponent implements OnInit {

  // to store the users fetched from the API.
  users: User[];
  // to store the reference of the selected user
  selected: User = null;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.fetchUsers()
                      .subscribe(result => {
                        this.users = result;
                        console.log(this.users);
                      });
  }

  // handler of the selected event of child
  public selectedUser(user: User)
  {
    this.selected = user;
    console.log("selected user in parent is ", user);
  }
}
