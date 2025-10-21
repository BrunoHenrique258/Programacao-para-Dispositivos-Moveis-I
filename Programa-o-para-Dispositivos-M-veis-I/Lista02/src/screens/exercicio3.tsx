// App.tsx do exercício 3 da lista 02

/*
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import Onze from "./src/screens/exercicio11";
import Um from "./src/screens/exercicio1";

// Drawer Navigator
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
  initialRouteName="Um"
  screenOptions={({ route }) => ({
    drawerIcon: ({ color, size }) => {
      let iconName: keyof typeof Ionicons.glyphMap = "home";

      switch (route.name) {
        case "Um":
          iconName = "home";
          break;
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },
  })}
>
  <Drawer.Screen name="Um" component={Um} />
</Drawer.Navigator>

    </NavigationContainer>
  );
} 
*/
