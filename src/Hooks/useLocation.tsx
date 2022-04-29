import React, { useEffect, useRef, useState } from 'react'
import Geolocation from '@react-native-community/geolocation';
import { Location } from '../Interfaces/AppInterfaces';

export const useLocation = () => {

  const [hasLocation, setHasLocation] = useState(false);
  const [initialPosition, setInitialPosition] = useState<Location>({
    longitude: 0,
    latitude: 0
  });

  const [userrLocation, setUserLocation] = useState<Location>({
    longitude: 0,
    latitude: 0
  });
  const [routeLines, setRouteLines] = useState<Location[]>([]);


  const watchId = useRef<number>();
  const isMounted = useRef(true);

  useEffect(()=>{
    isMounted.current = true;
    return()=>{
    isMounted.current=false;
    }

  },[]);

  useEffect(() => {

    getcurrentLocation().then(location => {
      if(!isMounted){
        return;
      }
      setRouteLines([...routeLines, location])
      setInitialPosition(location);
      setUserLocation(location);
      setHasLocation(true)
    }).catch((error)=>{
      throw error;
    });
  }, []);

  const getcurrentLocation = (): Promise<Location> => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        ({ coords }) => {

          resolve({
            latitude: coords.latitude,
            longitude: coords.longitude,
          });
        },
        (err) => reject({ err }),
        {
          enableHighAccuracy: false
        }
      );

    });
  }
  const followUserLocation = () => {
    watchId.current = Geolocation.watchPosition(
      ({ coords }) => {
        if(!isMounted){
          return;
        }
        const location:Location ={
          latitude:coords.latitude,
          longitude:coords.longitude
        }
        setUserLocation(location);
        setRouteLines([...routeLines, location]);
      }, (err) => console.log(err), { enableHighAccuracy: true, distanceFilter: 10 });
  }
  const stopFollowUserLocation=()=>{
    if(watchId.current)
        Geolocation.clearWatch(watchId.current);
  }


  return {
    hasLocation,
    initialPosition,
    getcurrentLocation,
    followUserLocation,
    userrLocation,
    stopFollowUserLocation,
    routeLines
  }
}