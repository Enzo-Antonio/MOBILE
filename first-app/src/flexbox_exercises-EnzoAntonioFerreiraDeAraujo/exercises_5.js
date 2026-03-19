import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView03() {
  return (
  <View style={styles.container}>
    <View style={styles.blueBox}><Text style={styles.textStyle}>Coluna 1</Text></View>
    <View style={styles.greenBox}><Text style={styles.textStyle}>Coluna 2</Text></View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 18,
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
    height: '100%',
    width: '50%',
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    height: '100%',
    width: '50%',
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});