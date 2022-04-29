import React,{useEffect} from 'react';
import {Text, View} from 'react-native';
import {RootDrawerParamsList} from '../Types/TypeDrawerNavegation';
import { DrawerScreenProps } from '@react-navigation/drawer';

type Props = DrawerScreenProps<RootDrawerParamsList, 'ViewOrder'>;

export const ViewOrder = ({route,navigation}:Props ) => {

  const params = route.params;

  return (
    <View style={{marginTop:100}}>
      <Text>
        {
          JSON.stringify(params,null,3)
        }
      </Text>
    </View>
  )
}
