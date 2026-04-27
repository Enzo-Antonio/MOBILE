import { View, Text, StyleSheet } from "react-native";

export default function Exemplo04() {
    const frutas = ["Banana", "Abacaxi", "Maça"]
    const alunos = [
        {id: 1, nome: "Enzo", nota: 10},
        {id: 2, nome: "Rafifa", nota: 9},
        {id: 3, nome: "Sola", nota: 9}
    ]
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Listas e Map</Text>
      <View style={styles.exemplo}>
        <Text style={styles.subtitulo}>Map Comum</Text>
        {frutas.map((fruta, index) => (
            <Text key={index}>
                {index + 1} - {fruta}
            </Text>
        ))}
      </View>
      <View style={styles.exemplo}>
        <Text style={styles.subtitulo}>Map com Objeto</Text>
        {alunos.map((aluno) => (
            <Text key={aluno.id}>
                {aluno.nome} - {aluno.nota}
            </Text>
        ))}
      </View>
      <View style={styles.exemplo}>
        <Text style={styles.subtitulo}>Map com Filter</Text>
        {alunos
        .filter((aluno) => aluno.nota >= 7)
        .map((aluno) => (
            <Text key={aluno.id}>
                Aprovado: {aluno.nome} | Nota: {aluno.nota}
            </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0066ff",
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
    backgroundColor: "#fff",
    borderRadius: 8,
    gap: 10,
  },
});