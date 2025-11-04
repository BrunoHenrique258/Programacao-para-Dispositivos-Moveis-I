import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>✅ O app está funcionando!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#f0f0f0" },
  txt: { fontSize: 20, fontWeight: "bold", color: "#333" },
});
