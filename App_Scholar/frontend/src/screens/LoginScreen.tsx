// screens/LoginScreen.tsx
import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Input from "../components/Input";
import Button from "../components/Button";
import { api } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";

export default function LoginScreen() {
  const navigation = useNavigation();
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const { data } = await api.post("/auth/login", { email, senha });

      await signIn(data.token, data.tipo);

    } catch (e: any) {
      Alert.alert("Erro", e?.response?.data?.message || "Falha no login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Scholar</Text>

      <Input placeholder="E-mail" value={email} onChangeText={setEmail} />
      <Input placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} />

      <Button title="Entrar" onPress={handleLogin} loading={loading} />

      <View style={{ marginTop: 20 }}>
        <Button title="Criar Conta" onPress={() => navigation.navigate("CadastroUsuario")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 16, textAlign: "center" },
});
