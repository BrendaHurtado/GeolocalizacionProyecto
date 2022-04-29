import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes:Routes =[
  {path:'login', loadChildren:()=>import('./auth/auth.module').then(m=> m.AuthModule)},
  {path:'Sidebar', loadChildren:()=> import('./Navegation/navegation.module').then(m=>m.NavegationModule)},
  {path:'**', redirectTo:'login'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }