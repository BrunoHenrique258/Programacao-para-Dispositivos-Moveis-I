import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import { api } from "../services/api";

export default function CadastroDisciplinaScreen() {
  const [nome, setNome] = useState("");
  const [cargaHoraria, setCarga] = useState("");
  const [professor, setProfessor] = useState("");

  const salvar = async () => {
    try {
      await api.post("/disciplinas", { nome, cargaHoraria: Number(cargaHoraria), professor });
      Alert.alert("Sucesso", "Disciplina cadastrada!");
      setNome(""); setCarga(""); setProfessor("");
    } catch (e: any) {
      Alert.alert("Erro", e?.response?.data?.message || "Falha ao salvar");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Disciplina</Text>
      <Input placeholder="Nome" value={nome} onChangeText={setNome} />
      <Input placeholder="Carga Horária" value={cargaHoraria} onChangeText={setCarga} keyboardType="numeric" />
      <Input placeholder="Professor responsável" value={professor} onChangeText={setProfessor} />
      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 12 },
});
