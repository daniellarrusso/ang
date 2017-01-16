import { Component, OnInit } from '@angular/core';
import { CounterComponent } from './counter.component'


@Component({
  selector: 'my-app',
  template: `
  <div class="app">
    <p>Hello World</p>
    <counter [counterValue]="myValue" (counterChange)="populateAppList($event)"></counter>
    <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
    </div>

    <ul>
    <li *ngFor="let app of applicantList">{{ app.name }}</li>
    </ul>

    <example-app></example-app>
  `,
  styles: [
    `
    .app {
      display: block;
      text-align: center;
      padding: 25px;
      background: #f5f5f5;
      }
      `
  ]
})
export class AppComponent { 
  
  

  public applicantList : Applicant[] = [];

  populateAppList(event: any)
  {
    let num = event.value;
    
    

    this.applicantList = []
    for (var i = 1; i <= num; i++)
    {
      let newApp = new Applicant();
      newApp.id = i;
      newApp.name = 'Applicant ' + i;
      
      this.applicantList.push(newApp);
    }
    

  }

  public myValue: number = 0;

  myValueChange(event: any)
  {
    console.log(event.value);
  }

  onOpen(event: any)
  {
    console.log(event);
  }
  onClose(event: any)
  {
    console.log(event);
  }
  name: string = null;
  constructor() { this.name = 'Mush'}

}

export class Applicant {
  public id: number;
  public name: string;
  public queue: string;

}


