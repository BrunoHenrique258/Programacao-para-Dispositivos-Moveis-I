import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";

export default function Exercicio6() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 📸 Abrir câmera
  const openCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) return alert("Permissão para usar a câmera negada!");

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  // 🖼️ Abrir galeria
  const openGallery = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) return alert("Permissão para acessar a galeria negada!");

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />

      {/* Botões no canto superior direito */}
      <View style={styles.topButtons}>
        <TouchableOpacity onPress={openGallery}>
          <MaterialIcons name="photo" size={32} color="deepskyblue" />
        </TouchableOpacity>

        <TouchableOpacity onPress={openCamera}>
          <MaterialIcons name="photo-camera" size={32} color="deepskyblue" />
        </TouchableOpacity>
      </View>

      {/* Imagem exibida */}
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.image} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  topButtons: {
    position: "absolute",
    top: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 40,
    right: 20,
    flexDirection: "row",
    gap: 16,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 80,
  },
});
