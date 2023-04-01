import React, { useState } from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Login from './src/components/login/Login';


export default function App() {
  
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Login />

    </View>
  );

  }