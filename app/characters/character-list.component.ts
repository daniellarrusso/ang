import { Component, OnInit } from '@angular/core';
import { Character } from './character'

@Component({
    selector: 'character-list',
    templateUrl: './app/characters/character-list.component.html'
})
export class CharacterListComponent implements OnInit {

    characters = [
        new Character(1, 'Hans Solo'),
        new Character(2, 'Chewbacca'),
        new Character(3, 'Princess Leagh'),
        new Character(4, 'Luke Skywalker')
    ];

    numForms = [1,2,3,4];
    selectedCharacter = new Character(0,"");

    select(character: Character) {
        this.selectedCharacter = character;
    };

    constructor() { }

    ngOnInit() { }
}