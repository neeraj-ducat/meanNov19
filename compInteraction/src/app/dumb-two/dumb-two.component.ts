import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-dumb-two',
  templateUrl: './dumb-two.component.html',
  styleUrls: ['./dumb-two.component.css']
})
export class DumbTwoComponent implements OnInit {

  @Input("data") user: User;
  constructor() { }

  ngOnInit() {
  }

}
