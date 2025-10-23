import React from "react";
import { SafeAreaView, View, Text, StyleSheet, useWindowDimensions } from "react-native";

export default function Tres() {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  // Cores mudam conforme a orientação
  const colors = isLandscape
    ? ["#FFFFE0", "#F0E68C", "#BDB76B"] 
    : ["#FFA07A", "#FA8072", "#FF6347"]; 

  return (
    <SafeAreaView
      style={[
        styles.container,
        { flexDirection: isLandscape ? "row" : "column" },
      ]}
    >
      <View style={[styles.box, { backgroundColor: colors[0] }]}>
        <Text>Top</Text>
      </View>

      <View style={[styles.box, { backgroundColor: colors[1] }]}>
        <Text>Middle</Text>
      </View>

      <View style={[styles.box, { backgroundColor: colors[2] }]}>
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
