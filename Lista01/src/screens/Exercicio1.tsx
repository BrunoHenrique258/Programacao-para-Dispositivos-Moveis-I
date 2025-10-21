import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Constants from 'expo-constants';

const Um = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <View style={styles.topSection} />
      <View style={styles.bottomSection} />
    </View>
  );
};

export default Um;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: Constants.statusBarHeight,
  },
  topSection: {
    flex: 0.5,
    backgroundColor: 'crimson',
  },
  bottomSection: {
    flex: 0.5,
    backgroundColor: 'salmon',
  },
});