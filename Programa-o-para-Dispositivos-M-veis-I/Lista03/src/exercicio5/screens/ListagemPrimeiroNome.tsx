import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function Exercicio5() {
  const [contacts, setContacts] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      // Solicita permissão
      const { status } = await Contacts.requestPermissionsAsync();

      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.FirstName, Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          // Aqui pegamos apenas o primeiro nome
          const formatted = data.map(contact => ({
            id: contact.id, // garante key única
            firstName: contact.firstName || contact.name?.split(' ')[0] || 'Sem nome',
            phone: contact.phoneNumbers?.[0]?.number || 'Sem número',
          }));

          setContacts(formatted);
        }
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.title}>Primeiros nomes dos contatos</Text>

      {contacts.length === 0 ? (
        <Text style={styles.infoText}>Nenhum contato encontrado.</Text>
      ) : (
        <FlatList
          data={contacts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.contactItem}>
              <Text style={styles.name}>{item.firstName}</Text>
              <Text style={styles.phone}>{item.phone}</Text>
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
