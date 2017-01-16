import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-vehicle',
    templateUrl: './app/vehicles/vehicles.component.html',
})
export class VehiclesComponent implements OnInit {
    vehicles = [
        {id: 1, name: 'X-wing'},
        {id: 2, name: 'Tie Fighter'},
        {id: 3, name: 'Millenium Falcon'},
    ]

    constructor() { }

    ngOnInit() { }
}