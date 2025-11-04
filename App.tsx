// App.tsx do AppScholar

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./App_Scholar/frontend/src/screens/HomeScreen";
import LoginScreen from "./App_Scholar/frontend/src/screens/LoginScreen";
import BoletimScreen from "./App_Scholar/frontend/src/screens/BoletimScreen";
import CadastroAlunoScreen from "./App_Scholar/frontend/src/screens/CadastroAlunoScreen";
import CadastroDisciplinaScreen from "./App_Scholar/frontend/src/screens/CadastroDisciplinaScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: "#4682B4" },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Início" }}
        />
        <Stack.Screen
          name="Boletim"
          component={BoletimScreen}
          options={{ title: "Boletim" }}
        />
        <Stack.Screen
          name="CadastroAluno"
          component={CadastroAlunoScreen}
          options={{ title: "Cadastro de Aluno" }}
        />
        <Stack.Screen
          name="CadastroDisciplina"
          component={CadastroDisciplinaScreen}
          options={{ title: "Cadastro de Disciplina" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// App.tsx das Listas 1 a 4

/* import React from 'react';
import Exercicio from './Lista01/src/screens/Exercicio1'

export default function App() {
  return <Exercicio />;
} */
