import React from "react";
import { NativeBaseProvider, Text, extendTheme } from "native-base";
import Login from "./src/components/login/login";
import { SafeAreaView } from "react-native-safe-area-context";


const config = {
  dependencies: {
    // For Expo projects (Bare or managed workflow)
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
    // For non expo projects
    // 'linear-gradient': require('react-native-linear-gradient').default,
  },
};

export default function App () {
  return (
    <NativeBaseProvider config={config} >
      <SafeAreaView >
        <Login></Login>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};