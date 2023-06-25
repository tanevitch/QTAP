import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, ScrollView, View, Icon, KeyboardAvoidingView } from "native-base";
import { Dimensions, Animated, StyleSheet, Pressable } from 'react-native';
import { MaterialIcons } from "react-native-vector-icons"
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { TextInputMask } from 'react-native-masked-text'

export default function Registrarse({ navigation }) {
    const [show, setShow] = React.useState(false);
    const [date, setDate] = useState('');
    const styles = StyleSheet.create({

        input: {
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
            paddingBottom: 2,
            marginBottom: 10,
        },
    });
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <LinearGradient
                colors={['#FEAC5E', '#C779D0']}
                style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 50, zIndex: 1  }}
                start={[0, 0.5]}
                end={[1, 0.5]}>
            </LinearGradient>
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      keyboardShouldPersistTaps="handled"
    >
            <View style={{ padding: 40 }}>
                <View style={{ alignItems: "flex-start" }}>
                    <Button onPress={() => navigation.goBack()} style={{ backgroundColor: 'transparent', paddingLeft: 0 }}>
                        <Icon as={<MaterialIcons name={"arrow-back"} />} size={10} mb="5" color="muted.600" />
                    </Button >
                    <Heading size="2xl" fontFamily="Inter_400Regular" fontWeight="600" color="muted.600">
                        Registrarse
                    </Heading>

                </View>
                <Box >
                    <FormControl my={"2"} mb={"10"} >
                        <FormControl.Label mt="5" >Nombre(s)</FormControl.Label>
                        <Input padding={"0"} variant="underlined" size="md" />
                        <FormControl.Label mt="5" >Apellido(s)</FormControl.Label>
                        <Input padding={"0"} variant="underlined" size="md" />
                        <FormControl.Label mt="5" >Fecha de nacimiento</FormControl.Label>
                        <TextInputMask
                            type={'datetime'}
                            options={{
                                format: 'DD/MM/YYYY'
                            }}
                            value={date}
                            onChangeText={setDate}
                            placeholder="DD/MM/AAAA"
                            style={styles.input}
                        />
                        <FormControl.Label mt="2" >Email</FormControl.Label>
                        <Input padding={"0"} m={"0"} variant="underlined" size="md" />
                        <FormControl.Label mt="5" >Contraseña</FormControl.Label>
                        <Input padding={"0"} variant="underlined" size="md" type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
                            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                        </Pressable>} />
                        <FormControl.Label mt="5" >Repetir contraseña</FormControl.Label>
                        <Input padding={"0"} variant="underlined" size="md" type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
                            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                        </Pressable>} />
                    </FormControl>
                    <LinearGradient
                        colors={['#FEAC5E', '#C779D0']}
                        style={{ borderRadius: 100, height: 50, alignItems: 'center', justifyContent: 'center' }}
                        start={[0, 0.5]}
                        end={[1, 0.5]}>
                        <Text color="white" fontSize="16" fontWeight="bold">Registrarme</Text>
                    </LinearGradient>
                </Box>
            </View>
            </ScrollView>
        </View>
    )
}