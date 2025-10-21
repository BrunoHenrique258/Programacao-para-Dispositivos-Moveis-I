import React, { useState } from 'react';
import { View, Image, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';

export default function Exercicio6() {
  const [imageUri, setImageUri] = useState<string | null>(null);

  // Abrir a galeria
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  // Abrir a câmera
  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      {/* Botões no canto superior direito */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={pickImage} style={styles.button}>
          <MaterialIcons name="photo" size={28} color="deepskyblue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={takePhoto} style={styles.button}>
          <MaterialIcons name="photocamera" size={28} color="deepskyblue" />
        </TouchableOpacity>
      </View>

      {/* Imagem exibida */}
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    position: 'absolute',
    top: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 30, // ajusta altura da StatusBar
    right: 15,
    flexDirection: 'row',
    zIndex: 10,
  },
  button: {
    marginLeft: 15,
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
  },
});
