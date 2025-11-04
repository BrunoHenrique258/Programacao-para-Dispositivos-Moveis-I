import React from "react";
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from "react-native";
import colors from "../theme/colors";

type Props = {
  title: string;
  onPress: () => void;
  loading?: boolean;
  variant?: "primary" | "danger" | "ghost";
};

export default function Button({ title, onPress, loading, variant="primary" }: Props) {
  const bg = variant === "primary" ? colors.primary
            : variant === "danger" ? colors.danger : "transparent";
  const color = variant === "ghost" ? colors.primary : "#fff";
  const border = variant === "ghost" ? { borderWidth: 1, borderColor: colors.primary } : {};
  return (
    <TouchableOpacity style={[styles.btn, { backgroundColor: bg }, border]} onPress={onPress} disabled={loading}>
      {loading ? <ActivityIndicator color="#fff" /> : <Text style={[styles.txt, { color }]}>{title}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 6,
  },
  txt: { fontWeight: "700", fontSize: 16 },
});
