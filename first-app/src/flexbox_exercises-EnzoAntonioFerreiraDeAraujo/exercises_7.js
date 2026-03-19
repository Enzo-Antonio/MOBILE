import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView05() {
  return (
  <View style={styles.container}>
    <View style={styles.row}>
        <View style={[styles.redBox, {flex: 1, width: '100%', height: 100}]}></View>
        <View style={[styles.greenBox, {flex: 1, width: '100%', height: 100}]}></View>
    </View>
    <View style={styles.row}>
        <View style={[styles.blueBox, {flex: 1, width: '100%', height: 100}]}></View>
        <View style={[styles.yellowBox, {flex: 1, width: '100%', height: 100}]}></View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 10,
    padding: 20,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    gap: 10,
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
  yellowBox: {
    height: 80,
    width: 80,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});