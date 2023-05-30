import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";

export default function SettingScreen(props) {
  const { navigation } = props;
  /* Para navegar de una pagina a la otra */
  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  };
  return (
    <SafeAreaView>
      <Text>Estoy en settings</Text>
      <Text>Estoy en settings</Text>
      <Text>Estoy en settings</Text>
      <Text>Estoy en settings</Text>
      <Text>Estoy en settings</Text>
      <Text>Estoy en settings</Text>
      <Text>Estoy en settings</Text>
      <Text>Estoy en settings</Text>
      <Button onPress={() => goToPage("Home")} title="Ir a home" />
    </SafeAreaView>
  );
}
