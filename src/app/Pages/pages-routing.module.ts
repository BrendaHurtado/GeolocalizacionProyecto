import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MapPageComponent} from './map-page/map-page.component';
import {PackageComponent} from './Package/package.component';



const routes: Routes = [
  {path:'map', component:MapPageComponent},
  {path:'packages', component:PackageComponent},
  {path:'**', redirectTo:'map'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
