import { Component,ViewChild, AfterViewInit,ElementRef } from '@angular/core';

import { Map, Marker, Popup } from 'mapbox-gl';
import { MapServicesService } from 'src/app/Services/map-services.service';
@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})

export class PackageComponent implements AfterViewInit {

  constructor(private mapservices:MapServicesService) { }

  @ViewChild('mapDirections')
  mapDivElement!: ElementRef;

  ngAfterViewInit(): void {

    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.mapservices.useLocation,
      zoom: 0 // starting zoom
    });

    const popup = new Popup()
    .setHTML(`
        <h6>Aqui estoy</h6>
        <span>Estoy en este lugar del mundo</span>
        `);
    new Marker({color:'red'})
    .setLngLat({
      lat:19.4956451,
      lng:-99.0681776
    })
    .setPopup(popup)
    .addTo(map)    

    this.mapservices.setMap(map);
  }

}
