import React, { useRef } from 'react'
import MapView from 'react-native-maps';

export const MapList = () => {

  const origin = { latitude: 37.3318456, longitude: -122.0296002 };

  const following = useRef<boolean>(true);

  return (
    <>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onTouchStart={() => following.current = false}
        liteMode={true}
      >
      </MapView>
    </>
  )
}
