// src/screens/exercicio3.tsx
import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Constants from 'expo-constants';

const Exercicio3 = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      {/* Parte superior dividida */}
      <View style={styles.topContainer}>
        <View style={styles.lime} />
        <View style={styles.rightContainer}>
          <View style={styles.teal} />
          <View style={styles.skyblue} />
        </View>
      </View>

      {/* Parte inferior */}
      <View style={styles.salmon} />
    </View>
  );
};

export default Exercicio3;

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
  },
  rightContainer: {
    flex: 0.5,
    flexDirection: 'column',
  },
  teal: {
    flex: 0.5,
    backgroundColor: 'teal',
  },
  skyblue: {
    flex: 0.5,
    backgroundColor: 'skyblue',
  },
  salmon: {
    flex: 0.5,
    backgroundColor: 'salmon',
  },
});