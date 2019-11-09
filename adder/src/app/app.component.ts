import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // data members to store the input values
  num1: string = '0';
  num2: string = '0';
  // data member to store the result
  result: number;
 // data member to control the display of result
 flag: boolean = true;
  // method to do the sum
 public add(){
   this.result = parseInt(this.num1) + parseInt(this.num2);
   this.flag = false;
  }
}
