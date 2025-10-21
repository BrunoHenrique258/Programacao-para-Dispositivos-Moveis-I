// src/screens/exercicio4.tsx
import React from 'react';
import { View, StyleSheet, StatusBar, Image } from 'react-native';
import Constants from 'expo-constants';

// importa o logo
import logo from "../assets/adaptive-icon.png";

const Exercicio4 = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      {/* Parte superior dividida */}
      <View style={styles.topContainer}>
        <View style={styles.lime}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.teal}>
            <Image source={logo} style={styles.logo} resizeMode="contain" />
          </View>
          <View style={styles.skyblue}>
            <Image source={logo} style={styles.logo} resizeMode="contain" />
          </View>
        </View>
      </View>

      {/* Parte inferior */}
      <View style={styles.salmon}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </View>
    </View>
  );
};

export default Exercicio4;

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
    flex: 1,
    width: '100%',
    height: '100%',
  },
});