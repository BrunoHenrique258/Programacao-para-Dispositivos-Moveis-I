import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const Exercicio2: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Parte superior (crimson) dividida horizontalmente */}
      <View style={styles.top}>
        <View style={styles.left}></View>
        <View style={styles.right}></View>
      </View>

      {/* Parte inferior (salmon) permanece igual */}
      <View style={styles.bottom}></View>
    </View>
  );
};

export default Exercicio2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',                 // eixo principal na vertical
    paddingTop: Constants.statusBarHeight,   
  },
  top: {
    flex: 0.5,                                // metade da tela
    flexDirection: 'row',                     // divide horizontalmente
    backgroundColor: 'crimson',
  },
  left: {
    flex: 0.5,                                // metade da largura
    backgroundColor: 'lime',
  },
  right: {
    flex: 0.5,                                // metade da largura
    backgroundColor: 'aquamarine',
  },
  bottom: {
    flex: 0.5,                                // metade da tela
    backgroundColor: 'salmon',
  },
});
