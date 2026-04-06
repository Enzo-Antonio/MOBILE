import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Botao({titulo}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.entrar}>
            <Text style={styles.textStyle}>Entrar: {titulo}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sair}>
            <Text style={styles.sair}>Sair: {titulo}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cadastrar}>
            <Text style={styles.textStyle}>Cadastrar: {titulo}</Text>
        </TouchableOpacity>
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
  textStyle: {
    color: "black",
    fontWeight: "bold",
  },
  exemplo: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  entrar: {
    backgroundColor: 'green',
    borderColor: 'black'
  },
  sair: {
    backgroundColor: 'red',
    borderColor: 'black'
  },
  cadastrar: {
    backgroundColor: 'blue',
    borderColor: 'black'
  }
});