import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function Exercicio4() {
  const [contacts, setContacts] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      // Solicita permissão
      const { status } = await Contacts.requestPermissionsAsync();

      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });

        // Filtra contatos cujo nome começa com "C" (maiúsculo ou minúsculo)
        if (data.length > 0) {
          const filtered = data.filter(contact => {
            const name = contact.name || '';
            return name.trim().toLowerCase().startsWith('c');
          });

          setContacts(filtered);
        }
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Text style={styles.title}>Contatos com a letra C</Text>

      {contacts.length === 0 ? (
        <Text style={styles.infoText}>Nenhum contato encontrado.</Text>
      ) : (
        <FlatList
          data={contacts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.contactItem}>
              <Text style={styles.name}>{item.name}</Text>
              {item.phoneNumbers && item.phoneNumbers[0] && (
                <Text style={styles.phone}>{item.phoneNumbers[0].number}</Text>
              )}
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  infoText: {
    textAlign: 'center',
    color: 'gray',
  },
  contactItem: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 16,
    color: '#333',
  },
});
