import React from 'react'
import {View,ScrollView,FlatList, Text} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatListMenuItem } from '../Components/FlatListMenuItem';
import { IMenuItem } from '../Interfaces/AppInterfaces';
import {styles} from '../Theme/appTheme';


const menuItem:IMenuItem[] =[
  {
    name:"Animation 101",
    icon:"cube-outline", 
    Component: 'ViewFaltante'
  },
  {
    name:"Animation 102",
    icon:"cube-outline",
    Component: 'ViewFaltante' 
  },
  {
    name:"Animation 103",
    icon:"cube-outline", 
    Component: 'ViewFaltante'
  }
]

export const ViajesFaltantes = () => {

  const {top} =useSafeAreaInsets();

  const renderListHeader=()=>{
    return(
      <View style ={{marginTop:top+20, alignItems:'center', marginBottom:20}}>
        <Text style={styles.title}>Opciones de Menu</Text>
      </View>
    );
  }

  const itemSeparator =()=>{
    return(
      <View
        style={{
          marginTop:15
        }}
      />
    );
  }

  return (
    <ScrollView>
      <View style={{flex:1, ...styles.globalMargin}}>
        <FlatList
          data={menuItem}
          renderItem={({item,index})=> <FlatListMenuItem
          key={index}  
          menuItem={item}
            />
          }
          keyExtractor={(item) => item.name}
          ListHeaderComponent={()=> renderListHeader()}
          ItemSeparatorComponent={()=> itemSeparator()} 
        />  
      </View>
    </ScrollView>
  )
}
