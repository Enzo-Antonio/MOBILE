import { View, Text, StyleSheet } from "react-native";

function PerfilAluno({nome, turma, matricula}) {
  return (
    <View style={styles.exemplo}>
        <Text style={styles.textStyle}>
          Nome: {nome} | 
          Turma: {turma} | 
          Matrícula: {matricula}
        </Text>
    </View>
  )
}

export default function PropsExercise4() {
  return (
    <View style={styles.container}>
        <PerfilAluno nome='Ash' turma='DS-2026' matricula={2202}/>
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