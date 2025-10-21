// src/screens/exercicio5.tsx
import React from 'react';
import { View, StyleSheet, StatusBar, Image, Alert, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// importa o logo
import logo from "../assets/adaptive-icon.png";

const Exercicio5: React.FC = () => {
    const handlePress = () => {
        alert('Boa noite!'); /* alert padrão para navegador */
    };

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      {/* Parte superior dividida */}
      <View style={styles.topContainer}>
        <View style={styles.lime}>
          <TouchableOpacity onPress={handlePress}>
            <Image source={logo} style={styles.logo} resizeMode="contain" />
          </TouchableOpacity>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.teal}>
            <TouchableOpacity onPress={handlePress}>
              <Image source={logo} style={styles.logo} resizeMode="contain" />
            </TouchableOpacity>
          </View>
          <View style={styles.skyblue}>
            <TouchableOpacity onPress={handlePress}>
              <Image source={logo} style={styles.logo} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Parte inferior */}
      <View style={styles.salmon}>
        <TouchableOpacity onPress={handlePress}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Exercicio5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: Constants.statusBarHeight,
  },
  topContainer: {
    flex: 0.5,
    flexDirection: 'row',
  },
  lime: {
    flex: 0.5,
    backgroundColor: 'lime',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 0.5,
    flexDirection: 'column',
  },
  teal: {
    flex: 0.5,
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
  },
  skyblue: {
    flex: 0.5,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  salmon: {
    flex: 0.5,
    backgroundColor: 'salmon',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 64,
    height: 64,
  },
});