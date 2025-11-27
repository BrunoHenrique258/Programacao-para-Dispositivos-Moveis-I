import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import { api } from "../services/api";
import { Picker } from "@react-native-picker/picker";

export default function CadastroUsuarioScreen() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [perfil, setPerfil] = useState<"aluno" | "professor" | "adm">("aluno");
  const [loading, setLoading] = useState(false);

  const handleCadastro = async () => {
    try {
      setLoading(true);
      await api.post("/auth/register", { nome, email, senha, perfil });

      Alert.alert("Sucesso", "Usuário cadastrado!");
    } catch (err: any) {
      Alert.alert("Erro", err?.response?.data?.message || "Falha no cadastro");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      <Input placeholder="Nome" value={nome} onChangeText={setNome} />
      <Input placeholder="E-mail" value={email} onChangeText={setEmail} />
      <Input placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry />

      <Text style={styles.label}>Perfil do usuário:</Text>
      <Picker selectedValue={perfil} onValueChange={setPerfil} style={styles.picker}>
        <Picker.Item label="Aluno" value="aluno" />
        <Picker.Item label="Professor" value="professor" />
        <Picker.Item label="Administrador" value="adm" />
      </Picker>

      <Button title="Cadastrar" onPress={handleCadastro} loading={loading}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 16, textAlign: "center" },
  label: { fontSize: 16, marginTop: 16 },
  picker: { backgroundColor: "#eee", borderRadius: 8 },
});
