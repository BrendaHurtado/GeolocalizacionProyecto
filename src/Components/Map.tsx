import React, { useRef,useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useLocation } from '../Hooks/useLocation';
import { LoadingScreen } from '../Screens/LoadingScreen';
import {useTimeReal} from '../Hooks/TimeReal';
import { Fab } from './Fab';

interface Props {
  markers?: Marker[];
}

export const Map = ({ markers }: Props) => {
  const { hasLocation, 
          initialPosition, 
          getcurrentLocation,
          followUserLocation,
          userrLocation,
          stopFollowUserLocation,
          routeLines } = useLocation();

  const mapViewRef = useRef<MapView>();
  const following = useRef<boolean>(true);
  const {sendMessage} = useTimeReal();

  useEffect(()=>{
    followUserLocation();
    return ()=>{
      stopFollowUserLocation();
    }
  },[]);

  useEffect(()=>{

    if(!following.current){
      return;
    }
    const {longitude,latitude}= userrLocation;
    sendMessage(latitude,longitude);
    mapViewRef.current?.animateCamera({
      center: {
        latitude: latitude,
        longitude: longitude
      },
      zoom: 20
    });

  },[userrLocation]);


  const centerPosition = async () => {

    const location = await getcurrentLocation();
    following.current =true;

    mapViewRef.current?.animateCamera({
      center: {
        latitude: location.latitude,
        longitude: location.longitude
      },
      zoom: 20
    });
  }

  if (!hasLocation) {
    return <LoadingScreen />
  }

  return (
    <>
      <MapView
        ref={(el) => mapViewRef.current = el!}
        showsUserLocation
        style={{ flex: 1 }}
        initialRegion={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onTouchStart={()=> following.current = false}
      >
      </MapView>
      <Fab
        iconName='compass-outline'
        onPress={centerPosition}
        style={{
          position: 'absolute',
          bottom: 10,
          right: 10
        }}
      />
    </>
  )
}
