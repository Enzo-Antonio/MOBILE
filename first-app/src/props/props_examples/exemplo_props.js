import { View, Text, StyleSheet } from "react-native";

export default function CartaoPerfil(props) {
            return (
                <View style={styles.exemplo}>
                    <Text style={styles.textStyle}>Nome: {props.nome}</Text>
                    <Text style={styles.textStyle}>Idade: {props.idade}</Text>
                </View>
            )
        }

export default function ExercicioView09() {
  return (
    <View style={styles.container}>
        <CartaoPerfil nome='Ana' idade={22}/>
        <CartaoPerfil nome='Eduardo' idade={1000}/>
        <CartaoPerfil nome='Bela' idade={18}/>

        <CartaoUsuario nome='Musashi' email='musashi_miyamoto.tkz@gmail.com'/>
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
    color: "white",
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