import { Heading, View } from "native-base";
import { StyleSheet } from "react-native";

export default function Home({navigation}) {

    return (
        <View >
            <Heading size="2xl" fontFamily="Inter_400Regular" fontWeight="600" color="muted.600">
                Bienvenido!
            </Heading>

    </View>
    )
}