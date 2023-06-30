import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function ScreenA() {
    const navigation = useNavigation();

    function openScreen(): void {
     
        navigation.navigate('screenB', {name: 'Este conteudo veio da tela A'});
    }

  return (
    <View style={{ flex:1, backgroundColor: 'red'}}>
     <Button title="Ir para tela B"
     onPress={openScreen}
     />
    </View>
  );
}
