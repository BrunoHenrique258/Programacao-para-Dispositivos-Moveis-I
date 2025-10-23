import React, { useState } from "react";
import {SafeAreaView,View,Text,TextInput,StyleSheet,useWindowDimensions,FlatList,} from "react-native";

export default function Cinco() {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const [nome, setNome] = useState("");
  const [nomes, setNomes] = useState<string[]>([]);

  // Cores diferentes conforme a orientação
  const colors = isLandscape
    ? ["#F0E68C", "#BDB76B"] 
    : ["#FFA07A", "#FA8072", "#FF6347"]; 

  const adicionarNome = () => {
    if (nome.trim() !== "") {
      setNomes([...nomes, nome.trim()]);
      setNome("");
    }
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        { flexDirection: isLandscape ? "row" : "column" },
      ]}
    >
      {/* Cabeçalho exibido apenas em portrait */}
      {!isLandscape && (
        <View style={[styles.topBox, { backgroundColor: colors[0] }]}>
          <Text style={styles.header}>Exercício 5</Text>
          <Text style={styles.label}>Nome:</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome completo"
            value={nome}
            onChangeText={setNome}
            onSubmitEditing={adicionarNome}
            returnKeyType="done"
          />
        </View>
      )}

      {/* Área de entrada + lista em landscape */}
      {isLandscape ? (
        <>
          <View style={[styles.box, { backgroundColor: colors[0] }]}>
            <Text style={styles.header}>Exercício 5</Text>
            <Text style={styles.label}>Nome:</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome completo"
              value={nome}
              onChangeText={setNome}
              onSubmitEditing={adicionarNome}
              returnKeyType="done"
            />
          </View>
          <View style={[styles.box, { backgroundColor: colors[1] }]}>
            <FlatList
              data={nomes}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Text style={styles.listItem}>{item}</Text>
              )}
            />
          </View>
        </>
      ) : (
        // Lista em portrait
        <View style={[styles.box, { backgroundColor: colors[2] }]}>
          <FlatList
            data={nomes}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Text style={styles.listItem}>{item}</Text>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBox: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  box: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginBottom: 10,
  },
  listItem: {
    paddingVertical: 6,
    fontSize: 14,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
  },
});
