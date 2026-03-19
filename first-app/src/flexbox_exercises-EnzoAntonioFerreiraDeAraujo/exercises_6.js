import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView04() {
  return (
  <View style={styles.container}>
    <View style={[styles.header, {flex: 1}]}><Text style={styles.textStyle}>Header</Text></View>
    <View style={[styles.main, {flex: 1}]}><Text style={styles.textStyle}>Main</Text></View>
    <View style={[styles.footer]}><Text style={styles.textStyle}>Footer</Text></View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  header: {
    height: 60,
    width: 440,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    height: 80,
    width: 440,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    height: 600,
    width: 440,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
});