import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Linking, Alert } from "react-native";

const YoutubeScreen = () => {
  const openYoutube = async () => {
    const videoId = "dQw4w9WgXcQ"; // 🔁 troque pelo ID do vídeo desejado
    const appUrl = `vnd.youtube://${videoId}`;
    const webUrl = `https://www.youtube.com/watch?v=${videoId}`;

    try {
      const supported = await Linking.canOpenURL(appUrl);
      if (supported) {
        await Linking.openURL(appUrl);
      } else {
        await Linking.openURL(webUrl);
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível abrir o YouTube.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Abrir vídeo no YouTube</Text>
      <TouchableOpacity style={styles.button} onPress={openYoutube}>
        <Text style={styles.buttonText}>Assistir agora</Text>
      </TouchableOpacity>
    </View>
  );
};

export default YoutubeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FF0000",
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
