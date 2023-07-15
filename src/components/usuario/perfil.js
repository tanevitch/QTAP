import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Box, Avatar ,HStack } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';



export default function Perfil(props) {
  return (
    <View style={{flex: 1}}>
        <LinearGradient
                colors={['#FEAC5E', '#C779D0']}
                start={[0, 0.5]}
                end={[1, 0.5]}
                flex={1}
              >
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{flex: 1}}>

        <Box style={{padding:20}}>
        <Avatar bg="green.500" source={{
      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }}>
        AJ
      </Avatar>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 10,
              marginBottom: 5,
            }} >
            Luciana Tanevitch
          </Text>
          <Text
              style={{
                color: '#fff',
                marginRight: 5,
              }}>
              150 patologías activas
            </Text>
          </Box>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
          </LinearGradient>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}>
              Info
            </Text>
          
            
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}>
              Cerrar sesión
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

