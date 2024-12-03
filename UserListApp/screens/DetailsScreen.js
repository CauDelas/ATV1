import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function DetailsScreen({ route, navigation }) {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.picture.large }} style={styles.avatar} />
      <Text style={styles.name}>
        {user.name.first} {user.name.last}
      </Text>
      <Text style={styles.detail}>Email: {user.email}</Text>
      <Text style={styles.detail}>Telefone: {user.phone}</Text>
      <Text style={styles.detail}>
        Endereço: {user.location.street.name}, {user.location.city} - {user.location.country}
      </Text>
      <Text style={styles.detail}>Nacionalidade: {user.nat}</Text>

      {/* Botão Voltar na parte inferior da tela */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.switchAccountText}>👤 Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start", // Alinha o conteúdo ao topo
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    marginVertical: 5,
  },
  buttonContainer: {
    position: "absolute", // Faz com que o botão fique fixado na parte inferior
    bottom: 20, // Distância do fundo da tela
    left: 0,
    right: 0,
    alignItems: "center", // Centraliza o botão horizontalmente
  },
  switchAccountText: {
    fontSize: 24, // Aumenta o tamanho do texto
    fontWeight: "bold", // Torna o texto mais destacado
    color: "black", // Cor do texto alterada para preto
    textAlign: "center", // Centraliza o texto
  },
});
