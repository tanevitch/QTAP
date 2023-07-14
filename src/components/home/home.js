import { Box, HStack, Heading, Icon, IconButton, StatusBar, Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { MaterialIcons } from "react-native-vector-icons"
import { LinearGradient } from 'expo-linear-gradient';

export default function Homes({ navigation }) {
    const styles = StyleSheet.create({
        gradient: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 90,
            zIndex: 1,
        },
        container: {
            backgroundColor: 'transparent',
            paddingHorizontal: 10,
            paddingTop: 40,
            paddingBottom: 3,
        },
    });

    return (
        
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={['#FEAC5E', '#C779D0']}
                style={styles.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}>
                <HStack style={styles.container}
                    justifyContent="space-between"
                    alignItems="center">
                    <HStack alignItems="center">
                        <IconButton icon={<Icon size="md" as={MaterialIcons} name="menu" color="white" />}/>
                        <Text color="white" fontSize="20" fontWeight="bold">
                            ¿Qué te anda pasando?
                        </Text>
                    </HStack>
                    <HStack>
                        <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />}/>
                    </HStack>
                </HStack>
            </LinearGradient>
            
        </View>
    )
}