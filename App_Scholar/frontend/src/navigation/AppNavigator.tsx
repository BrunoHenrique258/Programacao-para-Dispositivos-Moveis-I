import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AuthContext } from "../contexts/AuthContext";

import LoginScreen from "../screens/LoginScreen";
import CadastroUsuarioScreen from "../screens/CadastroUsuarioScreen";

import HomeScreen from "../screens/HomeScreen";
import CadastroAlunoScreen from "../screens/CadastroAlunoScreen";
import CadastroProfessorScreen from "../screens/CadastroProfessorScreen";
import CadastroDisciplinaScreen from "../screens/CadastroDisciplinaScreen";
import BoletimScreen from "../screens/BoletimScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AppDrawer() {
  const { tipo } = useContext(AuthContext);

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />

      {/* Cadastro de Usuário - todos podem */}
      <Drawer.Screen name="Cadastro de Usuário" component={CadastroUsuarioScreen} />

      {/* Cadastro de Aluno - Admin e Professor */}
      {(tipo === "admin" || tipo === "professor") && (
        <Drawer.Screen name="Cadastro de Aluno" component={CadastroAlunoScreen} />
      )}

      {/* Cadastro de Professor - Apenas Admin */}
      {tipo === "admin" && (
        <Drawer.Screen name="Cadastro de Professor" component={CadastroProfessorScreen} />
      )}

      {/* Cadastro de Disciplina - Apenas Admin */}
      {tipo === "admin" && (
        <Drawer.Screen name="Cadastro de Disciplina" component={CadastroDisciplinaScreen} />
      )}

      {/* Boletim - Todos podem ver */}
      <Drawer.Screen name="Boletim" component={BoletimScreen} />
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
