import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import { api } from "../services/api";

export default function CadastroAlunoScreen() {
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [curso, setCurso] = useState("");

  const salvar = async () => {
    try {
      await api.post("/alunos", { nome, matricula, curso });
      Alert.alert("Sucesso", "Aluno cadastrado!");
      setNome(""); setMatricula(""); setCurso("");
    } catch (e: any) {
      Alert.alert("Erro", e?.response?.data?.message || "Falha ao salvar");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Aluno</Text>
      <Input placeholder="Nome" value={nome} onChangeText={setNome} />
      <Input placeholder="Matrícula" value={matricula} onChangeText={setMatricula} />
      <Input placeholder="Curso" value={curso} onChangeText={setCurso} />
      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 12 },
});
