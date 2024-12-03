import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen"; // A tela de lista de usuários
import DetailsScreen from "./screens/DetailsScreen"; // Tela de detalhes do usuário
import LoginScreen from "./screens/LoginScreen";  // Importa a tela de login

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Tela de Login */}
        <Stack.Screen name="Login" component={LoginScreen} />
        
        {/* Tela de Lista de Usuários */}
        <Stack.Screen name="Home" component={HomeScreen} />
        
        {/* Tela de Detalhes do Usuário */}
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
