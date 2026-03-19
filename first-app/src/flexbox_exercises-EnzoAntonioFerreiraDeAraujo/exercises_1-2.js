import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView01() {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 60, alignItems: 'center' }}>
        <Text style={styles.tituloStyle}>Exercício 1</Text>
      </View>
      <View style={{ alignItems: 'center', gap: 20, marginTop: 20 }}>
        <View style={styles.redBox}><Text style={styles.textStyle}>Vermelho</Text></View>
        <View style={styles.blueBox}><Text style={styles.textStyle}>Azul</Text></View>
        <View style={styles.greenBox}><Text style={styles.textStyle}>Verde</Text></View>
      </View>
      <View>
        <Text style={styles.tituloStyle}>Exercício 2</Text>
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 40,
        gap: 20 
      }}>
        <View style={styles.redBox}><Text style={styles.textStyle}>R</Text></View>
        <View style={styles.greenBox}><Text style={styles.textStyle}>G</Text></View>
        <View style={styles.blueBox}><Text style={styles.textStyle}>B</Text></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 1,
    gap: 18,
    backgroundColor: 'white'
  },
  tituloStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black'
  },
  textStyle: {
    fontWeight: "bold",
    color: 'white'
  },
  redBox: {
    height: 80,
    width: 80,

    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  greenBox: {
    height: 80,
    width: 80,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    height: 80,
    width: 80,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});