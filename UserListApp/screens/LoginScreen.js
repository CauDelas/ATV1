import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";

export default function LoginScreen({ navigation }) {
  const [hasBiometricSupport, setHasBiometricSupport] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    checkBiometricSupport();
  }, []);

  const checkBiometricSupport = async () => {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    setHasBiometricSupport(compatible);
  };

  const handleBiometricLogin = async () => {
    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: "Faça a autenticação com a digital",
        fallbackLabel: "Usar senha",
      });

      if (result.success) {
        Alert.alert("Autenticação bem-sucedida!");
        navigation.replace("Home"); 
      } else {
        Alert.alert("Falha na autenticação!");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro ao tentar autenticar.");
    }
  };

  const handleTraditionalLogin = () => {
    if (username === "usuario" && password === "senha") {
      Alert.alert("Login bem-sucedido!");
      navigation.replace("Home"); 
    } else {
      Alert.alert("Usuário ou senha incorretos.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Entrar com Login e Senha" onPress={handleTraditionalLogin} />

      <View style={styles.orContainer}>
        <Text style={styles.orText}>OU</Text>
      </View>

      {hasBiometricSupport ? (
        <Button title="Login com Digital" onPress={handleBiometricLogin} />
      ) : (
        <Text style={styles.errorText}>
          Seu dispositivo não tem suporte para biometria.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  orContainer: {
    marginVertical: 20,
  },
  orText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginTop: 10,
  },
});
