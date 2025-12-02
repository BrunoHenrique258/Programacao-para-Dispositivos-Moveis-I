import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { api } from "../services/api";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { AppDrawerParamList } from "../types/navigation";

type Props = {
  navigation: DrawerNavigationProp<AppDrawerParamList, "AvisosList">;
};

interface Aviso {
  id: number;
  titulo: string;
  mensagem: string;
}

export default function AvisosListScreen({ navigation }: Props) {
  const [avisos, setAvisos] = useState<Aviso[]>([]);

  async function carregarAvisos() {
    try {
      const res = await api.get("/avisos");
      setAvisos(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      carregarAvisos();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button title="Criar Aviso" onPress={() => navigation.navigate("AvisosCreate")} />
      <FlatList
        data={avisos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text>{item.mensagem}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 10,
    borderRadius: 6,
  },
  titulo: {
    fontWeight: "bold",
    marginBottom: 4,
  },
});
