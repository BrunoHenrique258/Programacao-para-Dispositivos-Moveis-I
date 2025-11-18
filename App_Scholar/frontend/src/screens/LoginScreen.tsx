import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import { api } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";

export default function LoginScreen() {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("admin@fatec.br");
  const [senha, setSenha] = useState("123456");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    console.log("➡ Clicou no botão Entrar!");
    try {
      setLoading(true);
      const { data } = await api.post("/auth/login", { email, senha });
      console.log("Token recebido:", data.token);

      await signIn(data.token);
      console.log("Token salvo no contexto!");
    } catch (e: any) {
      console.log("ERRO NO LOGIN:", e);
      Alert.alert("Erro", e?.response?.data?.message || "Falha no login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Boletim</Text>
      <Input placeholder="E-mail" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
      <Input placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry />
      <Button title="Entrar" onPress={handleLogin} loading={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 16, textAlign: "center" },
});