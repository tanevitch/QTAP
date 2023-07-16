import 'react-native-gesture-handler';
import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { useFonts } from 'expo-font';
import { Inter_100Thin, Inter_200ExtraLight, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LinearGradient } from 'expo-linear-gradient';

import Registrarse from "./src/components/auth/register";
import Login from "./src/components/auth/login";
import Home from "./src/components/home/home";
import Perfil from './src/components/usuario/perfil';
import Patologia from './src/components/patologias/patologia';


const config = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
};

const Drawer = createDrawerNavigator();

export const theme = extendTheme({
  colors: {
    background: 'white',
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
      <NavigationContainer >
      
            <Drawer.Navigator initialRouteName="Login" drawerContent={ (props) => <Perfil {...props}/>}>
              <Drawer.Screen name="Login" component={Login} options={{ headerShown: false }}/>
              <Drawer.Screen name="Register" component={Registrarse} options={{ headerShown: false }}/>
              <Drawer.Screen name="Home" component={Home} options={{ 
                headerTintColor:"white", 
                headerBackground: 
                    () => 
                    <LinearGradient
                    colors={['#FEAC5E', '#C779D0']}
                    start={[0, 0.5]}
                    end={[1, 0.5]}
                    style={{ flex: 1 }}
                  />
              }}/>
              <Drawer.Screen name="Patologia" component={Patologia} options={{ 
                headerTintColor:"white", 
                headerBackground: 
                    () => 
                    <LinearGradient
                    colors={['#FEAC5E', '#C779D0']}
                    start={[0, 0.5]}
                    end={[1, 0.5]}
                    style={{ flex: 1 }}
                  />
              }}/>
            </Drawer.Navigator>
        </NavigationContainer>
        
    </NativeBaseProvider>
    
  );
};