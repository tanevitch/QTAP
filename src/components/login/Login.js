import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import { useFonts, Inter_500Medium, Inter_200ExtraLight, Inter_300Light } from '@expo-google-fonts/inter';
import styles from './LoginStyles'
import tw from 'tailwind-react-native-classnames';
import { LinearGradient } from 'expo-linear-gradient';
const Login = () => {
  let [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_200ExtraLight,
    Inter_300Light
  });

  if (!fontsLoaded) {
    return null;
  }



  return (
    <View style={tw`flex-1 w-full items-center justify-center bg-gray-100`}>
      <Text style={[tw`mb-1`, styles.titleText]}>QTAP</Text>
      <Text numberOfLines={2} style={[tw`mb-8`, styles.subText]}>¿Qué te anda pasando?</Text>
      <View style={tw`w-4/5 mb-4`}>
        <TextInput style={tw`px-4 py-3 bg-white rounded-full`} placeholder="Email" />
      </View>
      <View style={tw`w-4/5 mb-4`}>
        <TextInput style={tw`px-4 py-3 bg-white rounded-full`} placeholder="Contraseña" secureTextEntry={true} />
      </View>
      <Text style={[tw`mb-8`, styles.forgottenPassword]}>¿Olvidaste tu contraseña?</Text>

      <View style={tw`w-4/5 mb-4`}>
        <LinearGradient 
          colors={['#C779D0', '#FEAC5E']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.button, { paddingVertical: 15, paddingHorizontal: 45 }]}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </LinearGradient>
        </View>
    </View>

  );
};



export default Login;

         

