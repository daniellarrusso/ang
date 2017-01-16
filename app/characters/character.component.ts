import { Component, OnInit, Input } from '@angular/core';
import { Character } from './character';

@Component({
    selector: 'app-character',
    templateUrl: './app/characters/character.component.html'
})
export class CharacterComponent implements OnInit {

    @Input() character = Character;

    constructor() { }

    ngOnInit() { }
}