import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import CadastroAlunoScreen from "../screens/CadastroAlunoScreen";
import CadastroDisciplinaScreen from "../screens/CadastroDisciplinaScreen";
import BoletimScreen from "../screens/BoletimScreen";

import { AuthContext } from "../contexts/AuthContext";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Cadastro de Aluno" component={CadastroAlunoScreen} />
      <Drawer.Screen name="Cadastro de Disciplina" component={CadastroDisciplinaScreen} />
      <Drawer.Screen name="Boletim" component={BoletimScreen} />
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  const { token } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {token ? (
        <Stack.Screen name="App" component={AppDrawer} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
}