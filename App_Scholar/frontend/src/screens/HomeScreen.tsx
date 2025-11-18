import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import { AuthContext } from "../contexts/AuthContext";

export default function HomeScreen() {
  const { signOut } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao App Boletim</Text>
      <Button title="Sair" onPress={signOut} variant="danger" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 10, textAlign: "center" },
});
