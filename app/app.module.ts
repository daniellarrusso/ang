import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { VehiclesComponent }  from './vehicles/vehicles.component';
import { CharacterComponent } from './characters/character.component';
import { CharacterListComponent } from './characters/character-list.component';
import { CounterComponent } from './counter.component';
import { ZippyComponent } from './zippy.component';
import { FormBuilderComp } from './formbuilder.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, VehiclesComponent, CharacterComponent, 
                  CharacterListComponent, CounterComponent, ZippyComponent, FormBuilderComp ],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
