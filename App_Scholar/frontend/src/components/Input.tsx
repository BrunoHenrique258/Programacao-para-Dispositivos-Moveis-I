// src/components/input.tsx
import React from "react";
import { TextInput, StyleSheet, TextInputProps, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface InputProps extends TextInputProps {
  icon?: keyof typeof MaterialIcons.glyphMap;
}

export const Input: React.FC<InputProps> = ({ icon, ...rest }) => {
  return (
    <View style={styles.container}>
      {icon && <MaterialIcons name={icon} size={22} color="#555" style={styles.icon} />}
      <TextInput
        style={styles.input}
        placeholderTextColor="#999"
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 8,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 45,
    color: "#333",
    fontSize: 16,
  },
});

export default Input;
