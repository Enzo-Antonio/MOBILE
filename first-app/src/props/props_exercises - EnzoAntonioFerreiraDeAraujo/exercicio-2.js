import { View, Text, StyleSheet } from "react-native";

function CartaoUsuario({nome, email}) {
    return(
        <View style={styles.exemplo}>
            <Text style={styles.textStyle}>Nome: {nome}</Text>
            <Text style={styles.textStyle}>Email: {email}</Text>
        </View>
    )
}

export default function PropsExercise2() {
  return (
    <View style={styles.container}>
        <CartaoUsuario nome='Musashi' email='musashi_miyamoto.tkz@gmail.com'/>
        <CartaoUsuario nome='Sasaki' email='sasaki_kojiro.iuts@gmail.com'/>
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