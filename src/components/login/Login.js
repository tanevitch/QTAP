import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, ScrollView, View } from "native-base";
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions, Animated, StyleSheet } from 'react-native';
import { useRef } from "react";
import { useEffect } from "react";

export default function Login() {
    const { width, height } = Dimensions.get('window');
    const startAnimation = useRef(new Animated.Value(1)).current
    const moveTitle = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current

    const styles = StyleSheet.create(
        {
            bottomView: {
                flex: 1,
                backgroundColor: "white",
                borderTopStartRadius: 100,
                borderTopEndRadius: 100,
                bottom: 100,
                width: width,
                height: height
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
                    toValue: -(height /2),
                    useNativeDriver: true
                }
                ),
                Animated.timing(
                    moveTitle, {
                    toValue: {
                        x: 0,
                        y: (height /4.3)
                    },
                    useNativeDriver: true
                }
                )
            ])
            .start(() => {

            })
        }, 1000)
    }, [])

    
    return (
        <Animated.View style={{
            transform: [{ translateY: startAnimation }]
        }}>

            <Box style={{ height: height, width: width }}>
                <LinearGradient
                    colors={['#FEAC5E', '#C779D0']}
                    start={[0, 0.5]}
                    end={[1, 0.5]}
                    style={{ flex: 1 }}>
                    <Animated.View style={{
                        flex: 1,
                        transform: [
                            { translateX: moveTitle.x },
                            { translateY: moveTitle.y },
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
                </LinearGradient>
            </Box>
            <Box style={styles.bottomView}>
                <Box style={{ padding: 70 }}>
                    <VStack space={3} mt="5">
                        <FormControl>
                            <FormControl.Label>Email</FormControl.Label>
                            <Input />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Contraseña</FormControl.Label>
                            <Input type="password" />
                            <Link _text={{
                                fontWeight: "medium",
                                fontSize: "sm",
                                color: "coolGray.500"
                            }} alignSelf="flex-end" my="2">
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </FormControl>
                        <LinearGradient
                            colors={['#FEAC5E', '#C779D0']}
                            style={{ borderRadius: 5, height: 50, alignItems: 'center', justifyContent: 'center' }}
                            start={[0, 0.5]}
                            end={[1, 0.5]}>
                            <Text color="white" fontSize="16" fontWeight="bold">Iniciar Sesión</Text>
                        </LinearGradient>

                        <HStack mt="6" justifyContent="center">
                            <Text fontSize="sm" color="coolGray.600">
                                No tengo cuenta. ‎
                            </Text>
                            <Link _text={{
                                color: "coolGray.500",
                                fontWeight: "medium",
                                fontSize: "sm"
                            }} href="#">
                                Registrarme
                            </Link>
                        </HStack>
                    </VStack>
                </Box>
            </Box>
        </Animated.View>


    );


}
