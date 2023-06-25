import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, ScrollView, View } from "native-base";
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions, Animated, StyleSheet, TouchableOpacity } from 'react-native';
import { useRef } from "react";
import { useEffect } from "react";

export default function Login({navigation}) {
    const { width, height } = Dimensions.get('window');
    const startAnimation = useRef(new Animated.Value(1)).current
    const scaleTitle = useRef(new Animated.Value(1)).current
    const moveTitle = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current

    const styles = StyleSheet.create(
        {
            bottomView: {
                backgroundColor: "white",
                borderTopStartRadius: 70,
                borderTopEndRadius: 70,
                top: 50,
                height: height/3,
            },
            cabecera: {
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            },
        }
    )
    useEffect(() => {
        setTimeout(() => {
            Animated.parallel([
                Animated.timing(
                    startAnimation, {
                    toValue: -(height /1.5
                    ),
                    useNativeDriver: true
                }
                ),
                Animated.timing(
                    moveTitle, {
                    toValue: {
                        x: 0,
                        y: (height/2.5)
                    },
                    useNativeDriver: true
                },
                ),
                Animated.timing(
                    scaleTitle, {
                    toValue: 0.8,
                    useNativeDriver: true
                })
            ])
            .start(() => {

            })
        }, 1000)
    }, [])

    
    return (

<Animated.View style={{
            transform: [{ translateY: startAnimation }]
        }}>
                <LinearGradient
                    colors={['#FEAC5E', '#C779D0']}
                    start={[0, 0.5]}
                    end={[1, 0.5]}
                    style={{ height: height + height/3, width: width }}>
                    <Animated.View style={{
                        flex: 1,
                        transform: [
                            { translateX: moveTitle.x },
                            { translateY: moveTitle.y },
                            { scale: scaleTitle}
                        ]
                    }}>
                        <Box style={styles.cabecera}>
                            <Heading size="4xl" fontFamily="Inter_600SemiBold" fontWeight="600" color="white">
                                QTAP
                            </Heading>
                            <Heading mt="1" color="white" fontFamily="Inter_200ExtraLight" fontWeight="medium" size="xl">
                                ¿Qué te anda pasando?
                            </Heading>
                        </Box>
                        </Animated.View>
            <Box style={styles.bottomView}>
                <Box style={{ padding: 50 }}>
                    <VStack space={3} mt="5">
                        <FormControl>
                            <FormControl.Label my="4" >Email</FormControl.Label>
                            <Input size={"md"} padding={"0"} variant="underlined"/>
                            <FormControl.Label my="4" >Contraseña</FormControl.Label>
                            <Input size={"md"} padding={"0"} variant="underlined" type="password" />
                            <Link _text={{
                                fontWeight: "medium",
                                fontSize: "sm",
                                color: "coolGray.500"
                            }} alignSelf="flex-end" my="4">
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </FormControl>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
  <LinearGradient
    colors={['#FEAC5E', '#C779D0']}
    style={{ borderRadius: 100, height: 50, alignItems: 'center', justifyContent: 'center' }}
    start={[0, 0.5]}
    end={[1, 0.5]}
  >
    <Text color="white" fontSize="16" fontWeight="bold">Iniciar Sesión</Text>
  </LinearGradient>
</TouchableOpacity>

                        <HStack mt="6" justifyContent="center">
                            <Text fontSize="sm" color="coolGray.600">
                                No tengo cuenta. ‎
                            </Text>
                            <Link _text={{
                                color: "coolGray.500",
                                fontWeight: "medium",
                                fontSize: "sm"
                            }} onPress={() =>
                                navigation.navigate('Register')
                              }>
                                Registrarme
                            </Link>
                        </HStack>
                    </VStack>
                </Box>
            </Box>
            </LinearGradient>

            </Animated.View>

    );


}
