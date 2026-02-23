import { View, Text, StyleSheet } from "react-native";

export default function Exemplo02() {
  const nome = "Maria";
  const idade = 43;
  const preco = 48.6;

  const usuario = {
    nome: "Ana",
    cidade: "Salto",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>1. Variáveis</Text> //titulo
      <Text style={styles.subtitulo}>Variáveis Comuns</Text> // subtitulo
      <View> //exemplo
        <Text>Nome: {nome.toUpperCase()}</Text>
        <Text>Idade {idade}</Text>
        <Text>Preço: {preco * 2}</Text>
      </View>
      <View> //exemplo
        <Text>Nome: {usuario.nome}</Text>
        <Text>Cidade: {usuario.cidade}</Text>
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
