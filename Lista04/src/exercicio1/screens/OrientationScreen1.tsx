import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

export default function OrientationScreen() {
  const { width, height } = useWindowDimensions();

  // Define se a tela está em modo landscape
  const isLandscape = width > height;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isLandscape ? "#1E90FF" : "#FFA500" },
      ]}
    >
      <Text style={styles.text}>
        {isLandscape ? "Tela em modo landscape" : "Tela em modo portrait"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});
