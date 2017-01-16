import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'counter',
    template: `
    <div class="counter">
    <div class="counter__container">
    <button (click)="decrement()" class="counter__button">
    -
    </button>
    <input type="text" class="counter__input" [value]="counterValue">
    <button (click)="increment();" class="counter__button">
          +
        </button>
    </div>
    </div>
    `,
   styles: [`
    .counter {
      position: relative;
    }
    .counter__input {
      border: 0;
      border-radius: 3px;
      height: 30px;
      max-width: 100px;
      text-align: center;
    }
    .counter__button {
      outline: 0;
      cursor: pointer;
      height: 30px;
      width: 30px;
      border: 0;
      border-radius: 3px;
      background: #0088cc;
      color: #fff;
    }
    `],
    inputs: ['counterValue']
})
export class CounterComponent implements OnInit {
    
    counterValue: number = 0;

    @Output() counterChange = new EventEmitter();

    increment() {
        this.counterValue ++;
        this.counterChange.emit({
            value : this.counterValue
        })
    }

    decrement() {
        this.counterValue --;
        this.counterChange.emit({
            value: this.counterValue
        })
    }
    
    constructor() { }

    ngOnInit() { }
}