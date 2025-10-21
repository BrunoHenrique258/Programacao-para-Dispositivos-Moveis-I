import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useDialer } from "../hooks/useDialer";

export default function Exercicio12() {
  const { openDialer } = useDialer();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Abrir discador</Text>

      <TouchableOpacity style={styles.button} onPress={openDialer}>
        <Text style={styles.buttonText}>Ligar agora</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#20232a",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#34c759",
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
