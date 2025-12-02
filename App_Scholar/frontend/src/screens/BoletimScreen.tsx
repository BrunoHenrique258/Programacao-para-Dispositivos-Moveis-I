// screens/BoletimScreen.tsx
import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, FlatList, TextInput } from "react-native";
import { api } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";
import Button from "../components/Button";

interface LinhaBoletim {
  cod_boletim: number;
  aluno_nome: string;
  disciplina_nome: string;
  nota: number;
  media: number;
}

export default function BoletimScreen() {
  const { user, token } = useContext(AuthContext);

  const isAluno = user?.tipo === "aluno";
  const isProfessor = user?.tipo === "professor";
  const isAdmin = user?.tipo === "admin";

  const [lista, setLista] = useState<LinhaBoletim[]>([]);
  const [editando, setEditando] = useState<number | null>(null);
  const [notaEdit, setNotaEdit] = useState("");

  const carregar = async () => {
  try {
    const { data } = await api.get("/boletim", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    setLista(data);
  } catch {
    Alert.alert("Erro", "Falha ao carregar boletim");
  }
};

  const salvarEdicao = async (id: number) => {
    try {
      await api.put(`/boletim/${id}`, { nota: Number(notaEdit) }, {headers: { Athorization: `Bearer ${token}`}});
      Alert.alert("Sucesso", "Nota atualizada!");
      setEditando(null);
      carregar();
    } catch {
      Alert.alert("Erro", "Falha ao editar nota");
    }
  };

  useEffect(() => {
    carregar();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Boletim</Text>

      <FlatList
        data={lista}
        keyExtractor={(i) => i.cod_boletim.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.txt}><Text style={styles.bold}>Aluno:</Text> {item.aluno_nome}</Text>
            <Text style={styles.txt}><Text style={styles.bold}>Disciplina:</Text> {item.disciplina_nome}</Text>

            {editando === item.cod_boletim ? (
              <>
                <TextInput
                  placeholder="Nova Nota"
                  style={styles.input}
                  value={notaEdit}
                  onChangeText={setNotaEdit}
                  keyboardType="numeric"
                />
                <Button title="Salvar" onPress={() => salvarEdicao(item.cod_boletim)} />
              </>
            ) : (
              <Text style={styles.txt}>
                <Text style={styles.bold}>Nota:</Text> {item.nota}
              </Text>
            )}

            <Text style={styles.txt}>
              <Text style={styles.bold}>Média:</Text> {item.media}
            </Text>

            {(isAdmin || isProfessor) && editando !== item.cod_boletim && (
              <Button title="Editar nota" onPress={() => setEditando(item.cod_boletim)} />
            )}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  title: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  card: { padding: 15, backgroundColor: "#eee", borderRadius: 8, marginBottom: 12 },
  txt: { fontSize: 16, marginBottom: 4 },
  bold: { fontWeight: "bold" },
  input: { backgroundColor: "#fff", padding: 8, borderRadius: 6, marginBottom: 10 },
});
