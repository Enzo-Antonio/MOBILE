import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView06() {
  return (
  <View style={styles.container}>
    <View style={styles.column}>
        <View style={styles.redBox}></View>
        <View style={styles.greenBox}></View>
        <View style={styles.yellowBox}></View>
  </View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 5,
    padding: 10
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  column: {
    flexDirection: column,
    flex: 1,
    gap: 10,
  },
  redBox: {
    height: '90%',
    width: '50%',
    backgroundColor: "red",
  },
  greenBox: {
    height: '90%',
    width: '50%',
    backgroundColor: "green",
  },
  yellowBox: {
    height: '90%',
    width: '50%',
    backgroundColor: "yellow",
  },
});