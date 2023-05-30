import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";

export default function HomeScreen(props) {
  const { navigation } = props;

  /* Para navegar de una pagina a la otra */
  const goToPage = () => {
    navigation.navigate("Setting");
  };

  return (
    /* Con SafeAreaView el componente no se va hasta arriba de todo. Queda debajo de la hora y demas */
    <SafeAreaView>
      <Text>Estoy en el home</Text>
      <Text>Estoy en el home</Text>
      <Text>Estoy en el home</Text>
      <Text>Estoy en el home</Text>
      <Text>Estoy en el home</Text>
      <Text>Estoy en el home</Text>
      <Text>Estoy en el home</Text>
      <Text>Estoy en el home</Text>
      <Button onPress={goToPage} title="Ir a ajustes" />
    </SafeAreaView>
  );
}
