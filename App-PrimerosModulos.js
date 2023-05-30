import { memo, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Saludar from "./src/components/Header/Saludar";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [dataFetch, setDataFetch] = useState([]);

  const pedidoFetch = async () => {
    try {
      const response = await fetch(
        "https://pokemon-api-production-5cbb.up.railway.app/pokemons"
      );
      const dataFetch = await response.json();
      setDataFetch(dataFetch);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  const ItemComponent = memo(({ item }) => {
    return (
      <NavigationContainer>
        <View>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.text}>{item.height}</Text>
          <Image source={{ uri: item.img }} style={styles.image} />
        </View>
      </NavigationContainer>
    );
  });

  return (
    <View style={styles.container}>
      <Saludar style={styles.text} firstName="Mauricio" lastName="Monzón" />
      {/*   <Saludar style={styles.text} /> */}

      <Button title="Lista de pokemones" onPress={pedidoFetch} />
      {loading ? (
        <ActivityIndicator />
      ) : (
        <SafeAreaView>
          <FlatList
            data={dataFetch}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => <ItemComponent item={item} />}
          />
        </SafeAreaView>
      )}
      {/*  <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#11009E",
  },
  image: {
    width: 200,
    height: 200,
  },
});
