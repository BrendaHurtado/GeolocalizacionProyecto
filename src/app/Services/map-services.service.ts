import { Injectable } from '@angular/core';
import { LngLatLike, Map, Marker } from 'mapbox-gl';
import { IPlacesResponse, Feature } from '../Interfaces/IPlaces';
import { PlacesApiClient } from '../api';

@Injectable({
  providedIn: 'root'
})
export class MapServicesService {

  public useLocation!:[number,number];
  private map?:Map;
  public isLoadingPlaces:boolean = false;
  public places:Feature[]=[];
  private markers:Marker[]=[];

  constructor(private placesApi:PlacesApiClient) { 
    this.getUserLocation();
  }

  public async getUserLocation():Promise<[number,number]>{
    return new Promise((resolve, reject)=>{

      navigator.geolocation.getCurrentPosition(
        ({coords})=> {
          this.useLocation =[coords.longitude,coords.latitude];
          console.log(this.useLocation)
          resolve([coords.longitude,coords.latitude])},
          (
            error => {   
              console.log(error)
              reject();
            }
          )
      );
    });
  }

  get isMapReady(){
    return !! this.map;
  }
  get isUserLocationReady():boolean{
    return !!this.useLocation;
  }

  setMap(map:Map){
    this.map=map;
  }

  flyTo(lng:number, lat:number){

    this.map?.flyTo({
      zoom:14,
      center:{
        lat:lat,
        lng:lng
      }
    })



  }
  getPlacesByQuery(query:string = ''){
    if(query.length ===0){
      this.places =[];
      this.isLoadingPlaces = false;
      return;
    }
    this.isLoadingPlaces = true;
    this.placesApi.get<IPlacesResponse>(`/${query}.json`,{
      params:{
        proximity:this.useLocation!.join(',')
        
      }
    })
      .subscribe(res =>{

        console.log(res.features)
        this.isLoadingPlaces = false;
        this.places = res.features;
      });

  }

}
