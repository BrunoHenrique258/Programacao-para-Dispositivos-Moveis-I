import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, ScrollView } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import { api } from "../services/api";

export default function CadastroProfessorScreen() {
  const [nome, setNome] = useState("");
  const [titulacao, setTitulacao] = useState("");
  const [tempoDocencia, setTempoDocencia] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSalvar = async () => {
    if (!nome || !titulacao || !tempoDocencia) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    try {
      setLoading(true);

      await api.post("/professores", {
        nome,
        titulacao,
        tempo_docencia: Number(tempoDocencia),
      });

      Alert.alert("Sucesso", "Professor cadastrado!");
      setNome("");
      setTitulacao("");
      setTempoDocencia("");

    } catch (e: any) {
      Alert.alert("Erro", e?.response?.data?.message || "Falha ao cadastrar professor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro de Professor</Text>

      <Input placeholder="Nome do Professor" value={nome} onChangeText={setNome} />
      <Input placeholder="Titulação" value={titulacao} onChangeText={setTitulacao} />
      <Input
        placeholder="Tempo de docência (anos)"
        value={tempoDocencia}
        onChangeText={setTempoDocencia}
        keyboardType="numeric"
      />

      <Button loading={loading} title="Salvar" onPress={handleSalvar} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
});
