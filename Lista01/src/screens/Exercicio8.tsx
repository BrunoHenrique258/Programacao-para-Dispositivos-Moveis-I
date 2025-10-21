import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Exercicio8: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [resultado, setResultado] = useState('');

  const handleLogin = () => {
    if (!email.trim() || !senha.trim() || !confirmaSenha.trim()) {
      setResultado('Preencha todos os campos.');
      return;
    }

    if (senha !== confirmaSenha) {
      setResultado('As senhas não conferem.');
      return;
    }

    setResultado(`E-mail: ${email} | Senha: ${senha}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.moldura}>
        <Text style={styles.label}>E-mail:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect={false}
        />

        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
          maxLength={8}
        />

        <Text style={styles.label}>Confirme a senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirme sua senha"
          value={confirmaSenha}
          onChangeText={setConfirmaSenha}
          secureTextEntry={true}
          maxLength={8}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Logar</Text>
        </TouchableOpacity>

        {resultado !== '' && (
          <Text style={styles.resultado}>{resultado}</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Exercicio8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  moldura: {
    width: '90%',
    maxWidth: 270,
    padding: 20,
    borderWidth: 2,
    borderColor: '#007BFF',
    borderRadius: 10,
    backgroundColor: '#333',
  },
  label: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  resultado: {
    marginTop: 20,
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
