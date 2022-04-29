import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MapPageComponent } from './map-page/map-page.component';
import { PackageComponent } from './Package/package.component';
import {ComponentsModule} from '../Components/components.module';



@NgModule({
  declarations: [
    MapPageComponent,
    PackageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
