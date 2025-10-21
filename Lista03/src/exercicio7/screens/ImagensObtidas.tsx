import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";

export default function Exercicio7() {
  const [images, setImages] = useState<string[]>([]); // array de URIs

  // Função para abrir galeria
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImages([...images, result.assets[0].uri]); // adiciona imagem
    }
  };

  // Função para abrir câmera
  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImages([...images, result.assets[0].uri]); // adiciona imagem
    }
  };

  return (
    <View style={styles.container}>
      {/* Botões no canto superior direito */}
      <View style={styles.header}>
        <TouchableOpacity onPress={pickImage} style={styles.iconButton}>
          <MaterialIcons name="photo" size={32} color="deepskyblue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={takePhoto} style={styles.iconButton}>
          <MaterialIcons name="photo-camera" size={32} color="deepskyblue" />
        </TouchableOpacity>
      </View>

      {/* Exibição das imagens */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {images.map((uri, index) => (
          <Image key={index} source={{ uri }} style={styles.image} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: StatusBar.currentHeight || 40,
    marginRight: 20,
  },
  iconButton: {
    marginLeft: 10,
  },
  scrollContainer: {
    alignItems: "center",
    paddingVertical: 10,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginVertical: 10,
  },
});
