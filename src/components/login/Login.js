import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';

export default function Login() {
    const { width, height } = Dimensions.get('window');
    return (

        <Center w="100%" backgroundColor="light.100" h={height}>
             <Box position="absolute" top={-height * 0.3} width={width} height={height * 0.5}>
      <LinearGradient
        colors={['#FEAC5E', '#C779D0']}
        start={[0, 0.5]}
        end={[1, 0.5]}
        style={{ flex: 1 }}
      /></Box>
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Heading size="2xl" fontWeight="600" color="coolGray.800" _dark={{
                    color: "warmGray.50"
                }}>
                    QTAP
                </Heading>
                <Heading mt="1" _dark={{
                    color: "warmGray.200"
                }} color="coolGray.600" fontWeight="medium" size="xs">
                    ¿Qué te anda pasando?
                </Heading>

                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Contraseña</FormControl.Label>
                        <Input type="password" />
                        <Text _text={{
                            fontSize: "xs",
                            fontWeight: "500",
                            color: "indigo.500"
                        }} alignSelf="flex-end" mt="1">
                            ¿Olvidaste tu contraseña?
                        </Text>
                    </FormControl>
                    <LinearGradient
                        colors={['#FEAC5E', '#C779D0']}
                        style={{ borderRadius: 5, height: 50, alignItems: 'center', justifyContent: 'center' }}
                        start={[0, 0.5]}
                        end={[1, 0.5]}

                    ><Text color="white" fontWeight="bold">Iniciar Sesión</Text>
                    </LinearGradient>
                    <HStack mt="6" justifyContent="center">
                        <Text fontSize="sm" color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }}>
                            No tengo cuenta.{" "}
                        </Text>
                        <Link _text={{
                            color: "indigo.500",
                            fontWeight: "medium",
                            fontSize: "sm"
                        }} href="#">
                            Registrarme
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </Center>

    );

}
