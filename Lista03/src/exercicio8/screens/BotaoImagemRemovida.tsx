import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";

export default function Exercicio8() {
  const [images, setImages] = useState<string[]>([]);

  // Selecionar imagem da galeria
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled && result.assets?.length > 0) {
      setImages([...images, result.assets[0].uri]);
    }
  };

  // Tirar foto com a câmera
  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      quality: 1,
    });

    if (!result.canceled && result.assets?.length > 0) {
      setImages([...images, result.assets[0].uri]);
    }
  };

  // Remover imagem pelo índice
  const removeImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  return (
    <View style={styles.container}>
      {/* Botões no topo direito */}
      <View style={styles.header}>
        <TouchableOpacity onPress={pickImage} style={styles.iconButton}>
          <MaterialIcons name="photo" size={32} color="deepskyblue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={takePhoto} style={styles.iconButton}>
          <MaterialIcons name="photo-camera" size={32} color="deepskyblue" />
        </TouchableOpacity>
      </View>

      {/* Lista de imagens com botão de remoção */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {images.map((uri, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={{ uri }} style={styles.image} />
            <TouchableOpacity
              onPress={() => removeImage(index)}
              style={styles.removeButton}
            >
              <MaterialIcons name="close" size={24} color="red" />
            </TouchableOpacity>
          </View>
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
  imageContainer: {
    position: "relative",
    marginVertical: 10,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  removeButton: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 2,
    elevation: 3,
  },
});
