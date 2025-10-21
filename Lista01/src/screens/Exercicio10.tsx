import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Exercicio10: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [role, setRole] = useState('manager');
  const [logado, setLogado] = useState(false); /* estado do switch */
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

    setResultado(
      `E-mail: ${email} | Senha: ${senha} | Cargo: ${role} | Logado: ${
        logado ? 'Sim' : 'Não'
      }`
    );
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

        <Text style={styles.label}>Cargo:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={role}
            onValueChange={(itemValue) => setRole(itemValue)}
            style={styles.picker}
            dropdownIconColor="white"
          >
            <Picker.Item label="Administrador" value="admin" />
            <Picker.Item label="Gestor" value="manager" />
            <Picker.Item label="Usuário" value="user" />
          </Picker>
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.label}>Logado:</Text>
          <Switch
            value={logado}
            onValueChange={setLogado}
            trackColor={{ false: '#e77878', true: '#94df83' }}
            thumbColor={logado ? '#47eb22' : '#ed1111'}
          />
        </View>

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

export default Exercicio10;

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
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    marginBottom: 15,
    overflow: 'hidden',
  },
  picker: {
    color: 'white',
    backgroundColor: '#444',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    justifyContent: 'space-between',
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
