import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.css']
})
export class NavegationComponent implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit(): void {
    $('#menu-toggle').click(function(e:any) {
      e.preventDefault();
      $('#wrapper').toggleClass('toggled'); 
    });
  }
  logout(){
    localStorage.removeItem('Token');
    this.ruta.navigate(['/login']);

  }

}
