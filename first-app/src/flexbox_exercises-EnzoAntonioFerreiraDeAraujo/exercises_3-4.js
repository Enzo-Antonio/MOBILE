import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView02() {
  return (
  <View style={styles.container}>
    <Text style={styles.tituloStyle}>Exercício 3</Text>
    <View style={{
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginTop: 20
    }}>
      <View style={styles.redBox}><Text style={styles.textStyle}>R</Text></View>
      <View style={styles.greenBox}><Text style={styles.textStyle}>G</Text></View>
      <View style={styles.blueBox}><Text style={styles.textStyle}>B</Text></View>
    </View>
    <Text style={styles.tituloStyle}>Exercício 4</Text>
    <View style={{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <View style={styles.caixaCentro}><Text style={styles.textStyle}>Centro</Text></View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 18,
  },
  tituloStyle: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
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
  caixaCentro: {
    height: 120,
    width: 120,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  }
});