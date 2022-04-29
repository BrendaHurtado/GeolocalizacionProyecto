import React,{useContext} from 'react'
import {  StyleSheet, Text, View } from 'react-native'
import { BlackButton } from '../Components/BlackButton';
import {PermissionsContext} from '../context/PermissionsContext';


export const PermissionsScreen = () => {

  const {permissions,askLocationPermission} = useContext(PermissionsContext);

  return (
    <View style={styles.container}>
      <Text>Permissions Screen</Text>
      <BlackButton
        title='Permiso'
        onPress={askLocationPermission}
      />
      <Text>
          {JSON.stringify(permissions,null,5)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})