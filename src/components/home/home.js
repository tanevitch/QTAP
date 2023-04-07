import React from "react";
import {View, Button, Box, Heading, Center, Text, Image } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
    const { width, height } = Dimensions.get('window');
    
    const styles = StyleSheet.create(
        {
            container: {
                flex: 1.5, 
                alignItems:"center", 
                justifyContent:"center", 
                width: width,
            },
            loginButton: {
                backgroundColor: "white",
                width: 200
            }

        }
    )

    return (
      <SafeAreaView>
          <Box style={{height: height/2.5, width: width}}>
                <LinearGradient
                    colors={['#FEAC5E', '#C779D0']}
                    start={[0, 0.5]}
                    end={[1, 0.5]}
                    style={{ flex: 1, borderBottomRightRadius: 200, borderBottomLeftRadius: 200}}>
                    <Box style={styles.container}>
                        <Heading size="4xl" fontFamily="Inter_600SemiBold" fontWeight="600" color="white">
                            QTAP
                        </Heading>
                        <Heading mt="1" color="white" fontFamily="Inter_200ExtraLight" fontWeight="medium" size="md">
                            ¿Qué te anda pasando?
                        </Heading>
                        <Button my="2" style={styles.loginButton} title="Iniciar sesión" onPress={() => navigation.navigate('Login')}>
                            <Text color="#C779D0">Entrar</Text>
                        </Button>
                    </Box>
                </LinearGradient>
            </Box>
            <Box >
            <Image  
            style={{width: 200,
                height: 200}}
            source={{
            
            uri: "https://img.freepik.com/vector-gratis/ilustracion-vector-concepto-abstracto-guia-servicio-al-cliente-tutorial-servicio-al-cliente-manual-capacitacion-excelencia-consejos-empleados-guia-implementacion-metafora-abstracta-informacion-educativa_335657-2909.jpg?w=826&t=st=1680900947~exp=1680901547~hmac=039271b86e6726770c0b673a4a4cc32b11b84d92cde20059f42d4fe14b6498f3",
            }}  />
            <Text>Textito</Text>
            </Box>
            
            <Image  
            style={{width: 200,
                height: 200}}
            source={{
            
            uri: "https://img.freepik.com/vector-gratis/ilustracion-vector-concepto-abstracto-guia-servicio-al-cliente-tutorial-servicio-al-cliente-manual-capacitacion-excelencia-consejos-empleados-guia-implementacion-metafora-abstracta-informacion-educativa_335657-2909.jpg?w=826&t=st=1680900947~exp=1680901547~hmac=039271b86e6726770c0b673a4a4cc32b11b84d92cde20059f42d4fe14b6498f3",
            }}  />
            
            
      </SafeAreaView>
    );
  }
  