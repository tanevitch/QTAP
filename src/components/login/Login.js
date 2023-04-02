import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, ScrollView, View } from "native-base";
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions, StyleSheet } from 'react-native';

export default function Login() {
    const { width, height } = Dimensions.get('window');
    const styles = StyleSheet.create(
        {
            bottomView: {
                flex: 1.5,
                bottom: 50,
                borderTopStartRadius: 60,
                backgroundColor: "white",
                borderTopEndRadius: 60
            },
            brandView: {
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            },
            brandViewText: {
                color: "#ffffff",
                fontSize: 40,
                fontWeight: "bold",
                textTransform: "uppercase"

            }
        }
    )
    return (
        <Center w={width} h={height}>
            <Box style={{height: height/2.5, width: width}}>
                <LinearGradient
                    colors={['#FEAC5E', '#C779D0']}
                    start={[0, 0.5]}
                    end={[1, 0.5]}
                    style={{ flex: 1 }}
                >
                <View style={styles.brandView}>
                <Heading size="4xl" fontFamily="Inter_600SemiBold" fontWeight="600" color="white">
                    QTAP
                </Heading>
                <Heading mt="1" color="white" fontFamily="Inter_200ExtraLight" fontWeight="medium" size="md">
                    ¿Qué te anda pasando?
                </Heading>
                </View>
                </LinearGradient>
            </Box>

            <View style={styles.bottomView} width={width} height={height}>
                <View style={{padding: 40}}>
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
                        <Text color="white"fontSize="16" fontWeight="bold">Iniciar Sesión</Text>
                    </LinearGradient>
                    <HStack mt="6" justifyContent="center">
                        <Text fontSize="sm" color="coolGray.600">
                            No tengo cuenta.
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
                </View>
            </View>
        </Center>

    );

    
}
