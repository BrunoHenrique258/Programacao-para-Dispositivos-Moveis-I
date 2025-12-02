import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import LoginScreen from "../screens/LoginScreen";
import CadastroUsuarioScreen from "../screens/CadastroUsuarioScreen";
import HomeScreen from "../screens/HomeScreen";
import CadastroAlunoScreen from "../screens/CadastroAlunoScreen";
import CadastroDisciplinaScreen from "../screens/CadastroDisciplinaScreen";
import BoletimScreen from "../screens/BoletimScreen";
import AvisosListScreen from "../screens/AvisosListScreen";
import AvisosCreateScreen from "../screens/AvisosCreateScreen";

import { AuthContext } from "../contexts/AuthContext";
import { RootStackParamList, AppDrawerParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<AppDrawerParamList>();

function AppDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Cadastro de Aluno" component={CadastroAlunoScreen} />
      <Drawer.Screen name="Cadastro de Disciplina" component={CadastroDisciplinaScreen} />
      <Drawer.Screen name="Boletim" component={BoletimScreen} />
      <Drawer.Screen name="AvisosList" component={AvisosListScreen} />
      <Drawer.Screen name="AvisosCreate" component={AvisosCreateScreen} />
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  const { token } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!token ? (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="CadastroUsuario" component={CadastroUsuarioScreen} />
        </>
      ) : (
        <Stack.Screen name="App" component={AppDrawer} />
      )}
    </Stack.Navigator>
  );
}
