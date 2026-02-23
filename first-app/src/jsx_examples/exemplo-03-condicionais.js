import { View, Text, StyleSheet } from "react-native";

export default function Exemplo03() {
  const logado = false;
  const notificacoes = false;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>Condicionais</Text>
        <Text style={styles.subtitulo}>Ternário</Text>
        <Text>Status: {logado ? "Logado" : "Deslogado"}</Text>
      </View>
      <View style={styles.exemplo}>
        <Text style={styles.subtitulo}>Condicional com &&</Text>
        <Text>Notificações</Text>
        {temNotificacoes && <Text>Você tem novas notificações!</Text>}
        {!temNotificacoes && <Text>Você não tem novas notificações.</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#71b3f0",
    color: "rgb(255, 255, 255)"
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
    textAlign: "center",
  },
});
