import React from "react";
import { View, StyleSheet } from "react-native";
export default function Card({ children }: { children: React.ReactNode }) {
  return <View style={styles.card}>{children}</View>;
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    elevation: 2,
  },
});
