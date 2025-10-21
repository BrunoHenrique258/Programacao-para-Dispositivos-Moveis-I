import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Image, StatusBar } from "react-native";

const Exercicio11 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />

      {/* Imagem Fatec */}
      <Image
        source={require("../assets/fatec.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Título */}
      <Text style={styles.title}>HOME</Text>

      {/* Botões em duas colunas */}
      <View style={styles.buttonsContainer}>
        {[
          "Um", "Dois",
          "Três", "Quatro",
          "Cinco", "Seis",
          "Sete", "Oito",
          "Nove", "Dez"
        ].map((label, index) => (
          <TouchableOpacity key={index} style={styles.button}>
            <Text style={styles.buttonText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Exercicio11;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "80%",
  },
  button: {
    backgroundColor: "#f5b600",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    margin: 5,
    width: "40%", // duas colunas
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
});