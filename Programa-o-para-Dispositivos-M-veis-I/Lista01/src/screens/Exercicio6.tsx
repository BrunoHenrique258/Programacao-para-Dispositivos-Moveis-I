import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Exercicio6: React.FC = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [resultado, setResultado] = useState('');

  const handleSalvar = () => {
    if (nome.trim() === '' || idade.trim() === '') {
      setResultado('Preencha todos os campos.');
      return;
    }
    setResultado(`Nome: ${nome} | Idade: ${idade}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Idade:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric" /* teclado numérico */
      />

      <Button title="Salvar" onPress={handleSalvar} />

      {resultado !== '' && (
        <Text style={styles.resultado}>{resultado}</Text>
      )}
    </View>
  );
};

export default Exercicio6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#333', 
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: 'white', 
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    color: '#000', 
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', 
  },
});