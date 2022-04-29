import React from 'react'
import { useWindowDimensions, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerScreenProps, } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../Theme/appTheme';
import { MapScreen } from '../Screens/MapScreen';
import {ViajesFaltantes} from '../Screens/ViajesFaltantes';
import {ViewOrder} from '../Screens/ViewOrder';
import {RootDrawerParamsList} from '../Types/TypeDrawerNavegation';


interface Props extends DrawerScreenProps<any, any> { };


const Drawer = createDrawerNavigator<RootDrawerParamsList>();

export const LateralMenu = () => {

  const { width, height } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={({ navigation }: Props) => ({
        headerShown: true,
        headerTransparent: true,
        headerTitle: '',
        headerLeft: () => {
          return (
            <TouchableOpacity
              style={style.botonNavegacion}
              onPress={() => navigation.toggleDrawer()}
            >
              <Icon name="menu-outline" color="black" size={28} />
            </TouchableOpacity>
          );
        },
        drawerStyle: {
          backgroundColor: '#dfdfdf',
          width: 320
        },
        drawerType: width >= 768 ? 'permanent' : 'front'
      })}
      drawerContent={(props) => <MenuInterno {...props} />}
    >
      <Drawer.Screen name="MapScreen" component={MapScreen} />
      <Drawer.Screen name='ViajesFaltantes' component={ViajesFaltantes}/>
      <Drawer.Screen name='ViewOrder' component={ViewOrder}/>

    </Drawer.Navigator>
  )
}
const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {

  return (
    <DrawerContentScrollView>
      {/*Contentenos de avatar */}
      <View style={styles.avatarContainer}>
        <Text style={styles.textoCliente}>Alan Cruz</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditarPerfilScreen')}
        >
          <Text style={styles.textConfiguraciones}>Editar Perfil {'>'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={{
          ...styles.menuBoton,
          flexDirection: 'row'

        }}
          onPress={() => navigation.navigate('StackNavigator')}
        >
          <Icon name="compass-outline" size={28} color="orange" />
          <Text style={styles.menuTexto}>Viajes Realizados</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.menuBoton, flexDirection: 'row' }}
          onPress={() => navigation.navigate('ViajesFaltantes')}
        >
          <Icon name="compass-outline" size={28} color="blue" />
          <Text style={styles.menuTexto}>Viajes Faltantes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.menuBoton, flexDirection: 'row' }}
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Icon name="compass-outline" size={28} color="blue" />
          <Text style={styles.menuTexto}>Entregar Paquete</Text>
        </TouchableOpacity>


        <TouchableOpacity style={{ ...styles.menuBoton, flexDirection: 'row' }}
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Icon name="compass-outline" size={28} color="blue" />
          <Text style={styles.menuTexto}>Mensajes</Text>
        </TouchableOpacity>


        <TouchableOpacity style={{ ...styles.menuBoton, flexDirection: 'row' }}
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Icon name="compass-outline" size={28} color="blue" />
          <Text style={styles.menuTexto}>Configuración</Text>
        </TouchableOpacity>

      </View>
    </DrawerContentScrollView>
  );
}
const style = StyleSheet.create({
  botonNavegacion: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    left: 11,
    width: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    marginTop: 10
  }
})
