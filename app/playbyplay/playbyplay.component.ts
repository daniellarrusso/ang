import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>Hi</h1>',
})
export class PlayComponent  { 
  title = 'Customer App';
  name = 'Nathan';
  myColor = 'green';
  customers = [
    {id: 1, name: 'Nathan'},
    { id: 2, name: 'Kevin'},
    { id: 3, name: 'Tracey'},
    { id: 4, name: 'Michael'},
    { id: 5, name: 'John'}
  ];
  changeColor() {
    this.myColor = this.myColor === 'green' ?  'red':'green';
  }
}
