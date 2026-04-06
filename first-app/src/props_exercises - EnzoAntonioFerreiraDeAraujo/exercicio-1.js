import { View, Text, StyleSheet } from "react-native";

function CardProduto({produto, preco}) {
    return (
        <View style={styles.exemplo}>
            <Text style={styles.textStyle}>Produto: {produto}</Text>
            <Text style={styles.textStyle}>Preço: R$ {preco}</Text>
        </View>
    )
}

export default function PropsExercise1() {
  return (
    <View style={styles.container}>
        <CardProduto produto='Pecê' preco={5.500}/>
        <CardProduto produto='Felicidade' preco={0}/>
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