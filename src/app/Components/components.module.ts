import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchBarComponent} from './search-bar/search-bar.component';
import { SearcresultsComponent } from './searcresults/searcresults.component';



@NgModule({
  declarations: [SearchBarComponent, SearcresultsComponent],
  imports: [
    CommonModule
  ],
  exports:[
    SearchBarComponent
  ]
})
export class ComponentsModule { }
