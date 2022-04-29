import React from 'react'
import { LogBox, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Navegator } from '../Navegator/Navegation';
import { PermissionsProvider } from '../context/PermissionsContext';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const AppState = ({ children }: any) => {
  return (
    <PermissionsProvider>
      {children}
    </PermissionsProvider>
  )
}

export const MainStack = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StatusBar backgroundColor={"black"} barStyle='light-content'/>
        <Navegator />
      </AppState>
    </NavigationContainer>
  )
}
