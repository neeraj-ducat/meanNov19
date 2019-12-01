import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-dumb-one',
  templateUrl: './dumb-one.component.html',
  styleUrls: ['./dumb-one.component.css']
})
export class DumbOneComponent implements OnInit {
// to receive the users from the smart component.
 @Input("data") users: User[];
// to provide the selected user to the smart component
@Output("selected") emitter:EventEmitter<User> = new EventEmitter(); 
  constructor() { }

  ngOnInit() {
  }

  // to receive the selected user
  public selected(user:User) {
    console.log('selected user in child is ', user);
    this.emitter.emit(user);
  }
}
