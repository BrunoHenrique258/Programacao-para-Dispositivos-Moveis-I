import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import { api } from "../services/api";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { AppDrawerParamList } from "../types/navigation";

type Props = {
  navigation: DrawerNavigationProp<AppDrawerParamList, "AvisosCreate">;
};

export default function AvisosCreateScreen({ navigation }: Props) {
  const [titulo, setTitulo] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function salvar() {
    if (!titulo || !mensagem) {
      return Alert.alert("Erro", "Preencha todos os campos.");
    }

    try {
      await api.post("/avisos", { titulo, mensagem });
      Alert.alert("Sucesso", "Aviso criado!");
      navigation.navigate("AvisosList"); // volta e atualiza lista
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível criar o aviso.");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.tituloTela}>Criar Aviso</Text>
      <TextInput
        placeholder="Título"
        style={styles.input}
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput
        placeholder="Mensagem"
        style={[styles.input, { height: 120 }]}
        multiline
        value={mensagem}
        onChangeText={setMensagem}
      />
      <Button title="Publicar Aviso" onPress={salvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  tituloTela: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 12,
    borderRadius: 6,
  },
});
