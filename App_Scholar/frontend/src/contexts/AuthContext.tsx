import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextType {
  token: string | null;
  tipo: "admin" | "professor" | "aluno" | null;
  user: any | null; // <- AQUI ESTÁ A PROPRIEDADE QUE ESTÁ FALTANDO
  signIn: (token: string, tipo: string, userData: any) => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  token: null,
  tipo: null,
  user: null,
  signIn: async () => {},
  signOut: async () => {},
});

export function AuthProvider({ children }: any) {
  const [token, setToken] = useState<string | null>(null);
  const [tipo, setTipo] = useState<"admin" | "professor" | "aluno" | null>(null);
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    async function loadStorage() {
      const t = await AsyncStorage.getItem("@token");
      const tp = await AsyncStorage.getItem("@tipo");
      const u = await AsyncStorage.getItem("@user");

      if (t) setToken(t);
      if (tp) setTipo(tp as any);
      if (u) setUser(JSON.parse(u));
    }
    loadStorage();
  }, []);

  async function signIn(token: string, tipo: string, userData: any) {
    setToken(token);
    setTipo(tipo as any);
    setUser(userData);

    await AsyncStorage.setItem("@token", token);
    await AsyncStorage.setItem("@tipo", tipo);
    await AsyncStorage.setItem("@user", JSON.stringify(userData));
  }

  async function signOut() {
    setToken(null);
    setTipo(null);
    setUser(null);

    await AsyncStorage.removeItem("@token");
    await AsyncStorage.removeItem("@tipo");
    await AsyncStorage.removeItem("@user");
  }

  return (
    <AuthContext.Provider value={{ token, tipo, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
