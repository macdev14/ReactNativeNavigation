import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
type ParamsProps = {
  name: string;
}
export default function ScreenB() {
  const navigation = useNavigation();
  const route = useRoute();
  const {name} = route.params as ParamsProps;
  return (
    <View style={{ flex:1, backgroundColor: 'blue', alignItems:"center", justifyContent:'center'}}>
  <Text>{name}</Text>
  <Button title="Voltar" onPress={()=> navigation.goBack()}/>
    </View>
  );
}
