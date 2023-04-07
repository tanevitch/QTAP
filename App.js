import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { useFonts } from 'expo-font';
import { Inter_100Thin, Inter_200ExtraLight, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from "./src/components/login/login";
import Home from "./src/components/home/home";

const config = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
};

const Stack = createNativeStackNavigator();

export const theme = extendTheme({
  colors: {
    background: 'white'
  },
  fontConfig: {
    Inter: {
      100: {
        normal: Inter_100Thin,
      },
      200: {
        normal: Inter_200ExtraLight,
      },
      300: {
        normal: Inter_300Light,
      },
      400: {
        normal: Inter_400Regular,
      },
      600: {
        normal: Inter_600SemiBold,
      },
      800: {
        normal: Inter_800ExtraBold,
      },
    },
    
  },

  fonts: {
    heading: "Inter_600SemiBold",
    body: "Inter_400Regular",
    mono: "Inter_100Thin",
  }})

export default function App () {
  const [loaded] = useFonts({
    Inter_200ExtraLight,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_800ExtraBold
  });

  if (!loaded) {
    return null;
  }
  return (
    <NativeBaseProvider config={config}  theme={theme}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
          </Stack.Navigator>
        </NavigationContainer>
    </NativeBaseProvider>
    
  );
};