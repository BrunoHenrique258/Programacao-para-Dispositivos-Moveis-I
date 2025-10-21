import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useInstagram } from "../hooks/useInstagram";

export default function Exercicio13() {
  const { openInstagram } = useInstagram();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Abrir Instagram da Fatec Jacareí</Text>

      <TouchableOpacity style={styles.button} onPress={openInstagram}>
        <Text style={styles.buttonText}>Abrir Instagram</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#E1306C",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
