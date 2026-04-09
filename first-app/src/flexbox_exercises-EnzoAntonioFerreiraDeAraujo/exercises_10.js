import { View, Text, StyleSheet } from "react-native";

export default function Exercicio10() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textStyle}>Header</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.row}>
          <View style={[styles.card, { backgroundColor: "red" }]}>
            <Text>1</Text>
          </View>
          <View style={[styles.card, { backgroundColor: "blue" }]}>
            <Text>2</Text>
          </View>
          <View style={[styles.card, { backgroundColor: "yellow" }]}>
            <Text>3</Text>
          </View>
        </View>

        <View style={[styles.row, { flex: 1 }]}>
          <View style={styles.main}>
            <Text>Painel Principal</Text>
          </View>
          <View style={styles.sidePanel}>
            <Text>Lateral</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.textStyle}>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 50,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    padding: 8,
    gap: 8,
  },
  row: {
    flexDirection: "row",
    gap: 8,
  },
  card: {
    flex: 1,
    height: 100,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    flex: 2,
    backgroundColor: "pink",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  sidePanel: {
    flex: 1,
    backgroundColor: "gray",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    height: 40,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
});