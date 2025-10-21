// App.tsx do exercício 1 da lista 2

/* 
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Onze from "./Lista02/src/screens/exercicio1";
import Um from "./Lista01/src/screens/Exercicio1";

import { RootStackParamList } from "./types"; 

const Stack = createNativeStackNavigator<RootStackParamList>(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onze">
        <Stack.Screen name="Onze" component={Onze} />
        <Stack.Screen name="Um" component={Um} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/

import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "Onze">;

const Onze = ({ navigation }: Props) => {
  // Lista de rotas tipada
  const rotas: (keyof RootStackParamList)[] = [
    "Um", "Dois", "Tres", "Quatro", "Cinco",
    "Seis", "Sete", "Oito", "Nove", "Dez",
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />

      {/* Imagem Fatec */}
      <Image
        source={require("../../assets/fatec.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Título */}
      <Text style={styles.title}>HOME</Text>

      {/* Botões em duas colunas */}
      <View style={styles.buttonsContainer}>
        {rotas.map((label, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => navigation.navigate(label as never)}
          >
            <Text style={styles.buttonText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Onze;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "80%",
  },
  button: {
    backgroundColor: "#f5b600",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    margin: 5,
    width: "40%", // duas colunas
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
});
