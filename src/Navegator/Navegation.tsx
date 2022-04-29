import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PermissionsScreen } from '../Screens/PermissionsScreen';
import { PermissionsContext } from '../context/PermissionsContext';
import { LoadingScreen } from '../Screens/LoadingScreen';
import {LateralMenu} from './LateralMenu';

export type RootStackParamList ={
  LateralMenun: undefined,
  PermissionsScreen: undefined 
}



const Stack = createStackNavigator<RootStackParamList>();

export const Navegator = () => {

  const { permissions } = useContext(PermissionsContext);

  if (permissions.localtionStatus === 'unavailable') {
    return <LoadingScreen />
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        },
        
      }}
    >
      {
        (permissions.localtionStatus === 'granted')
          ? <Stack.Screen name="LateralMenun" component={LateralMenu} />
          : <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
      }
    </Stack.Navigator>
  );
}