import { View, Text, StyleSheet } from "react-native";

export default function Exercicio09() {
  return (
    <View style={styles.container}>
        <View style={styles.semaforo}>
            <View style={styles.greenCircle}></View>
            <View style={styles.yellowCircle}></View>
            <View style={styles.redCircle}></View>
        </View>
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
  semaforo: {
    flexDirection: 'column',
    backgroundColor: 'black',
    gap: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 15,
    width: 'auto',
    height: 'auto'
  },
  greenCircle: {
    backgroundColor: 'green',
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  yellowCircle: {
    backgroundColor: 'yellow',
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  redCircle: {
    backgroundColor: 'red',
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  exemplo: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
});