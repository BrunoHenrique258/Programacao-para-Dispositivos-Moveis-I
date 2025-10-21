// App.tsx do exercício 4 da lista 2

/*
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CepProvider } from "../Lista02/src/context/CepContext";
import ViaCepScreen from "../Lista02/src/screens/exercicio4";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <CepProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="ViaCEP">
          <Drawer.Screen name="ViaCEP" component={ViaCepScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </CepProvider>
  );
}
*/

// CepContext.tsx do exercício 4 da lista 2

/*
import React, { createContext, useState } from "react";
import { CepResponse } from "../types/CepTypes";
import { getCep } from "../services/viaCep";

interface CepContextData {
  cep: string;
  setCep: (cep: string) => void;
  data: CepResponse | null;
  fetchCep: () => Promise<void>;
}

export const CepContext = createContext<CepContextData>({} as CepContextData);

export const CepProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cep, setCep] = useState("");
  const [data, setData] = useState<CepResponse | null>(null);

  const fetchCep = async () => {
    if (!cep) return;
    const result = await getCep(cep);
    setData(result);
  };

  return (
    <CepContext.Provider value={{ cep, setCep, data, fetchCep }}>
      {children}
    </CepContext.Provider>
  );
};
*/

import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useCep } from "../hooks/useCep";

const ViaCepScreen = () => {
  const { cep, setCep, data, fetchCep } = useCep();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>CEP</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={cep}
        onChangeText={setCep}
        placeholder="Digite o CEP"
      />
      <TouchableOpacity style={styles.button} onPress={fetchCep}>
        <Text style={styles.buttonText}>Obter</Text>
      </TouchableOpacity>

      {data && !data.erro && (
        <View style={styles.result}>
          <Text style={styles.text}>Logradouro: {data.logradouro}</Text>
          <Text style={styles.text}>Localidade: {data.localidade}</Text>
          <Text style={styles.text}>UF: {data.uf}</Text>
        </View>
      )}
      {data?.erro && <Text style={styles.error}>CEP inválido!</Text>}
    </View>
  );
};

export default ViaCepScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    padding: 16,
  },
  label: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 10,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#FFD700",
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    fontWeight: "bold",
    color: "#000",
  },
  result: {
    marginTop: 10,
  },
  text: {
    color: "#fff",
    marginBottom: 4,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});
