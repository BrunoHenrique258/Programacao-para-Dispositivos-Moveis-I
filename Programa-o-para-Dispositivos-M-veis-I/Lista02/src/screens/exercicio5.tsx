// App.tsx do exercício 5 da lista 2

/*import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CepProvider } from "../Lista02/src/context/CepContext";
import ViaCepScreen from "../Lista02/src/screens/exercicio4";
import ConsultasScreen from "../Lista02/src/screens/exercicio5";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <CepProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="ViaCEP">
          <Drawer.Screen name="ViaCEP" component={ViaCepScreen} />
          <Drawer.Screen name="Consultas" component={ConsultasScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </CepProvider>
  );
}
*/

import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useCep } from "../context/CepContext";
import { CepResponse } from "../types/CepTypes";

const ConsultasScreen: React.FC = () => {
  const { historico } = useCep();

  return (
    <ScrollView style={styles.container}>
      {historico.length > 0 ? (
        historico.map((item: CepResponse, index: number) => (
          <View key={index} style={styles.item}>
            <Text style={styles.text}>Logradouro: {item.logradouro}</Text>
            <Text style={styles.text}>Localidade: {item.localidade}</Text>
            <Text style={styles.text}>UF: {item.uf}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.text}>Nenhuma consulta realizada</Text>
      )}
    </ScrollView>
  );
};

export default ConsultasScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    padding: 16,
  },
  item: {
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#555",
    paddingBottom: 8,
  },
  text: {
    color: "#fff",
  },
});
