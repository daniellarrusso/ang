import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent  { 
  title = 'Customer App';
  name = 'Nathan';
  myColor = 'blue';
  changeColor() {
    this.myColor = this.myColor === 'blue' ?  'red':'blue';
  }
}
