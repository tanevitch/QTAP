import { Avatar, Box, Fab, FlatList, HStack, Heading, Icon, Spacer, VStack } from 'native-base';
import { Button, Text, View } from 'react-native';
import { MaterialIcons } from "react-native-vector-icons"

export default function Home({ navigation }) {
  const ultimoRegistro = {
    nombre: "Gripe",
    fechaComienzo: "17/05/2023",
    avatarUrl: "https://cdn-icons-png.flaticon.com/512/2713/2713252.png",
    sintoma: {
      nombre: "tos",
      fecha: "18/05/2023",
      descripcion: "tosi como la puta madre!!"
    }
  }

  const data = [{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    nombre: "Gripe",
    fechaComienzo: "17/05/2023",
    ultimoSintoma: "Good Day!",
    avatarUrl: "https://cdn-icons-png.flaticon.com/512/2713/2713252.png"
  }, {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    nombre: "Gripe",
    fechaComienzo: "17/05/2023",
    ultimoSintoma: "Cheer up, there!",
    avatarUrl: "https://cdn-icons-png.flaticon.com/512/2713/2713252.png"
  }, {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    nombre: "Gripe",
    fechaComienzo: "17/05/2023",
    ultimoSintoma: "Good Day!",
    avatarUrl: "https://cdn-icons-png.flaticon.com/512/2713/2713252.png"
  }, {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    nombre: "Gripe",
    fechaComienzo: "17/05/2023",
    ultimoSintoma: "All the best",
    avatarUrl: "https://cdn-icons-png.flaticon.com/512/2713/2713252.png"
  }, {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    nombre: "Gripe",
    fechaComienzo: "17/05/2023",
    ultimoSintoma: "I will call today.",
    avatarUrl: "https://cdn-icons-png.flaticon.com/512/2713/2713252.png"
  }];
  return (
    <Box style={{ flex: 1, padding: 20 }}>
      <Box my={"2"}>
        <Heading size="xl" fontFamily="Inter_400Regular" fontWeight="600" color="muted.600">Hola, Luciana 👋</Heading>
        <Text style={{ fontSize: 18,color: '#a3a3a3' }} fontFamily="Inter_100Thin" >¿Qué te anda pasando?</Text>
      </Box>

      <Box my={"3"}>
        <Heading size="md" color="muted.600" fontWeight="400" fontFamily="Inter_400Regular" >Último registro</Heading>
        <Box style={{ backgroundColor: "white", height: 100, marginTop: 10, borderRadius: 20, padding: 20 }} shadow={2}>
        <HStack space={[2, 3]} justifyContent="space-between">
                <Avatar size="48px" source={{
                  uri: ultimoRegistro.avatarUrl
                }} />
                <VStack>
                  <Text color="coolGray.800" bold>
                    {ultimoRegistro.nombre}
                  </Text>
                  <Text color="coolGray.600">
                    {ultimoRegistro.sintoma.nombre} ({ultimoRegistro.sintoma.fecha})
                  </Text>
                  <Text color="coolGray.600">
                    {ultimoRegistro.sintoma.descripcion}
                  </Text>
                </VStack>
                <Spacer />
                <Text fontSize="xs" color="coolGray.800" alignSelf="flex-start">
                  {ultimoRegistro.fechaComienzo}
                </Text>
              </HStack>
        </Box>
      </Box>

      <Box my={"3"}>
        <Heading size="md" color="muted.600" fontWeight="400" fontFamily="Inter_400Regular">Mis patologías</Heading>
        <Box style={{ backgroundColor: "white", height: 380, marginTop: 10, borderRadius: 20, padding: 20 }} shadow={2}>
          <FlatList data={data} renderItem={({
            item
          }) => <Box borderBottomWidth="1" borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
              <HStack space={[2, 3]} justifyContent="space-between">
                <Avatar size="48px" source={{
                  uri: item.avatarUrl
                }} />
                <VStack>
                  <Text _dark={{
                    color: "warmGray.50"
                  }} color="coolGray.800" bold>
                    {item.nombre}
                  </Text>
                  <Text color="coolGray.600">
                    {item.ultimoSintoma}
                  </Text>
                </VStack>
                <Spacer />
                <Text fontSize="xs" color="coolGray.800" alignSelf="flex-start">
                  {item.fechaComienzo}
                </Text>
              </HStack>
            </Box>} keyExtractor={item => item.id} />
        </Box>
        <Fab renderInPortal={false} shadow={2} size="sm" backgroundColor="#C779D0" icon={<Icon as={<MaterialIcons name={"add"} />} color="white" />} />
      </Box>
    </Box>
  );
}

