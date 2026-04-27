// ============================================
// Arquivo Base
// ============================================

import { View, Text, StyleSheet } from "react-native";

export default function Exemplo01() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sport Club Corinthians Paulista</Text>
      <Text style={styles.subtitulo}>SCCP</Text>
      <Text style={styles.exemplo}>Olá Corinthiano! 🐦‍⬛</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4285f4",
    marginBottom: 8,
  },
  exemplo: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 8,
    textAlign: "center"
  },
});