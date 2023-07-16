import { Box, Image, Text } from "native-base";

export default function Sintoma(props){
    return(
        <Box style={{height: 140, width: 140, justifyContent: "center", alignItems: "center", backgroundColor: "white", borderRadius: 20}} shadow={2}>
            <Image alt={props.nombre} source={{uri: props.imagen} }style={{width: 70, height: 70}}/>
            <Text>{props.nombre}</Text>
        </Box>
    )
}