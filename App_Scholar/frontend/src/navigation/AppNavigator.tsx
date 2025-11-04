import React, { useEffect, useMemo, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import CadastroAlunoScreen from "../screens/CadastroAlunoScreen";
import CadastroDisciplinaScreen from "../screens/CadastroDisciplinaScreen";
import BoletimScreen from "../screens/BoletimScreen";

type RootStackParamList = {
  Login: undefined;
  App: undefined;
};

export const AuthContext = React.createContext<{
  token: string | null;
  signIn: (t: string) => Promise<void>;
  signOut: () => Promise<void>;
}>({ token: null, signIn: async () => {}, signOut: async () => {} });

const Stack = createNativeStackNavigator<RootStackParamList>();
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
  const [token, setToken] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      const t = await AsyncStorage.getItem("@token");
      setToken(t);
      setReady(true);
    })();
  }, []);

  const ctx = useMemo(() => ({
    token,
    signIn: async (t: string) => { await AsyncStorage.setItem("@token", t); setToken(t); },
    signOut: async () => { await AsyncStorage.removeItem("@token"); setToken(null); },
  }), [token]);

  if (!ready) return null;

  return (
    <AuthContext.Provider value={ctx}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {token ? (
          <Stack.Screen name="App" component={AppDrawer} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </AuthContext.Provider>
  );
}
