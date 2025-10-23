import React from "react";
import { SafeAreaView, View, Text, StyleSheet, useWindowDimensions } from "react-native";

export default function Quatro() {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  // Cores diferentes conforme a orientação
  const colors = isLandscape
    ? ["#F0E68C", "#BDB76B"] 
    : ["#FFA07A", "#FA8072", "#FF6347"]; 

  return (
    <SafeAreaView
      style={[
        styles.container,
        { flexDirection: isLandscape ? "row" : "column" },
      ]}
    >
      {/* Cabeçalho exibido apenas em portrait */}
      {!isLandscape && (
        <View style={[styles.box, { backgroundColor: colors[0] }]}>
          <Text style={styles.text}>Exercício 4</Text>
        </View>
      )}

      {/* Seção do meio */}
      <View
        style={[
          styles.box,
          { backgroundColor: isLandscape ? colors[0] : colors[1] },
        ]}
      >
        <Text style={styles.text}>Middle</Text>
      </View>

      {/* Seção inferior */}
      <View
        style={[
          styles.box,
          { backgroundColor: isLandscape ? colors[1] : colors[2] },
        ]}
      >
        <Text style={styles.text}>Bottom</Text>
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
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
