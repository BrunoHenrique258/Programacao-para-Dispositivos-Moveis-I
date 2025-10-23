import React from "react";
import { SafeAreaView, View, Text, StyleSheet, useWindowDimensions } from "react-native";

export default function Dois() {
  const { width, height } = useWindowDimensions();

  // Define se a tela está em modo landscape
  const isLandscape = width > height;

  return (
    <SafeAreaView
      style={[
        styles.container,
        { flexDirection: isLandscape ? "row" : "column" },
      ]}
    >
      <View style={[styles.box, { backgroundColor: "#FFA07A" }]}>
        <Text>Top</Text>
      </View>

      <View style={[styles.box, { backgroundColor: "#FA8072" }]}>
        <Text>Middle</Text>
      </View>

      <View style={[styles.box, { backgroundColor: "#FF6347" }]}>
        <Text>Bottom</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
