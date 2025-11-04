import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import { api } from "../services/api";

type LinhaBoletim = { disciplina: string; nota1: number; nota2: number; media: number };

export default function BoletimScreen() {
  const [matricula, setMatricula] = useState("");
  const [itens, setItens] = useState<LinhaBoletim[]>([]);

  const buscar = async () => {
    try {
      const { data } = await api.get(`/boletim/${matricula}`);
      setItens(data.itens);
    } catch (e: any) {
      Alert.alert("Erro", e?.response?.data?.message || "Falha na consulta");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Boletim</Text>
      <Input placeholder="Matrícula do aluno" value={matricula} onChangeText={setMatricula} />
      <Button title="Buscar" onPress={buscar} />
      <FlatList
        style={{ marginTop: 10 }}
        data={itens}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.disciplina}</Text>
            <Text style={styles.cell}>N1: {item.nota1}</Text>
            <Text style={styles.cell}>N2: {item.nota2}</Text>
            <Text style={styles.cell}>M: {item.media.toFixed(1)}</Text>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 12 },
  row: { flexDirection: "row", justifyContent: "space-between", backgroundColor: "#fff", padding: 12, borderRadius: 8, marginBottom: 8, borderWidth: 1, borderColor: "#eee" },
  cell: { fontSize: 14, fontWeight: "600" },
});
