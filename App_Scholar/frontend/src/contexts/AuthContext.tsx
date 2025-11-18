import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type AuthContextType = {
  token: string | null;
  signIn: (token: string) => Promise<void>;
  signOut: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
  token: null,
  signIn: async () => {},
  signOut: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const savedToken = await AsyncStorage.getItem("@token");
      setToken(savedToken);
      setLoading(false);
    })();
  }, []);

  async function signIn(t: string) {
    await AsyncStorage.setItem("@token", t);
    setToken(t);
  }

  async function signOut() {
    await AsyncStorage.removeItem("@token");
    setToken(null);
  }

  if (loading) return null;

  return (
    <AuthContext.Provider value={{ token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}