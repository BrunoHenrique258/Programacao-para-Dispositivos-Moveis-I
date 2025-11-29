// contexts/AuthContext.tsx
import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextType {
  token: string | null;
  tipo: "admin" | "professor" | "aluno" | null;
  user: any;
  signIn: (token: string, tipo: string) => Promise<void>;
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
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const t = await AsyncStorage.getItem("@token");
      const tp = await AsyncStorage.getItem("@tipo");

      if (t) setToken(t);
      if (tp) setTipo(tp as any);

      setUser({ tipo: tp });
    })();
  }, []);

  const signIn = async (token: string, tipo: string) => {
    await AsyncStorage.setItem("@token", token);
    await AsyncStorage.setItem("@tipo", tipo);

    setToken(token);
    setTipo(tipo as any);
    setUser({ tipo });
  };

  const signOut = async () => {
    await AsyncStorage.clear();
    setToken(null);
    setTipo(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, tipo, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
