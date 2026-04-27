import { View, Text, StyleSheet } from "react-native";

function Saudacao({nome, pronome}) {
    return (
        <View style={styles.exemplo}><Text style={styles.textStyle}>Olá, {nome}! Bem-vind{pronome}</Text></View>
    )
}

export default function PropsExercise3() {
  return (
    <View style={styles.container}>
      <Saudacao nome='Otsu' pronome='a'/>
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
});