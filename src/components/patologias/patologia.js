import { Box, FormControl, Input, ScrollView, Text, View } from "native-base";
import Sintoma from "./sintoma";

export default function Patologia(){
    const sintomasDisponibles= [
        {
            index: "1",
            nombre: "tos",
            imagen: "https://cdn-icons-png.flaticon.com/512/2328/2328501.png"
        },
        {
            index: "2",
            nombre: "fiebre",
            imagen: "https://cdn-icons-png.flaticon.com/512/2877/2877822.png"
        },
        {
            index: "3",
            nombre: "vomito",
            imagen: "https://cdn-icons-png.flaticon.com/512/493/493549.png"
        },
        {
            index: "1",
            nombre: "tos",
            imagen: "https://cdn-icons-png.flaticon.com/512/2328/2328501.png"
        },
        {
            index: "2",
            nombre: "fiebre",
            imagen: "https://cdn-icons-png.flaticon.com/512/2877/2877822.png"
        },
        {
            index: "3",
            nombre: "vomito",
            imagen: "https://cdn-icons-png.flaticon.com/512/493/493549.png"
        },{
            index: "1",
            nombre: "tos",
            imagen: "https://cdn-icons-png.flaticon.com/512/2328/2328501.png"
        },
        {
            index: "2",
            nombre: "fiebre",
            imagen: "https://cdn-icons-png.flaticon.com/512/2877/2877822.png"
        },
        {
            index: "3",
            nombre: "vomito",
            imagen: "https://cdn-icons-png.flaticon.com/512/493/493549.png"
        },
        {
            index: "1",
            nombre: "tos",
            imagen: "https://cdn-icons-png.flaticon.com/512/2328/2328501.png"
        },
        {
            index: "2",
            nombre: "fiebre",
            imagen: "https://cdn-icons-png.flaticon.com/512/2877/2877822.png"
        },
        {
            index: "3",
            nombre: "vomito",
            imagen: "https://cdn-icons-png.flaticon.com/512/493/493549.png"
        }
    ]
    return(
        <ScrollView vertical>
        <Box style={{flex:1}} p={10} pt={0}>
            <FormControl my={"2"} mb={"10"} >
                <FormControl.Label mt="5" >Nombre</FormControl.Label>
                <Input padding={"0"} variant="underlined" size="md" />
                <FormControl.Label mt="5" >¿Cuándo comenzaron los síntomas?</FormControl.Label>
                <Input padding={"0"} variant="underlined" size="md" />
            </FormControl>
            <Text>Seleccione los síntomas:</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {sintomasDisponibles.map((sintoma, index) => (
                <View key={index} style={{ width: 140, margin: 8 }}>
                    <Sintoma {...sintoma} />
                </View>
                ))}
            </View>
        </Box>
        </ScrollView>
    )
}