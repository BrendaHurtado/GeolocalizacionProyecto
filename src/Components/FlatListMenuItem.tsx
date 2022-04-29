import React from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IMenuItem } from '../Interfaces/AppInterfaces';
import { MapList } from '../Components/MapList';
import {RootDrawerParamsList} from '../Types/TypeDrawerNavegation';
import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props {
  menuItem: IMenuItem
}

type flatlistProp = StackNavigationProp<RootDrawerParamsList, 'ViewOrder'>;

export const FlatListMenuItem = ({ menuItem }: Props) => {
  const navegation=useNavigation<flatlistProp>();

  return (
    
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={()=> 
                navegation.navigate('ViewOrder',{
                  id:menuItem.name
                })
      }
    >
      <View style={stylesFlatList.container}>
        <View style={stylesFlatList.card_template}>
          <MapList/>
          <View style={stylesFlatList.text_container}>
            <Text style={stylesFlatList.card_title}>Some Textt</Text>
            <Text style={stylesFlatList.card_title}>Some Textt</Text>
            <Text style={stylesFlatList.card_title}>Some Textt</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>

  )
}

const stylesFlatList = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card_template:{
    width: 370,
    height: 250,
    boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)"
  },
  text_container:{
    position: "absolute",
    width: 370,
    height: 80,
    bottom:0,
    padding: 5,
    backgroundColor: "rgba(0,0,0, 0.3)",
    borderBottomLeftRadius : 10,
    borderBottomRightRadius: 10,
  },
  card_title: {
     color: "white",
     fontWeight:'800'
  }
})
