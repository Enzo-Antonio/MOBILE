import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView06() {
  return (
    <View style={styles.container}>
      <View style={styles.sideBar}>
        <Text style={styles.sidebarText}>Sidebar</Text>
      </View>

      <View style={styles.body}>
        <View style={[styles.card, styles.greenBox]}>
          <Text style={styles.textStyle}>Card 1</Text>
        </View>
        <View style={[styles.card, styles.yellowBox]}>
          <Text style={styles.textStyle}>Card 2</Text>
        </View>
        <View style={[styles.card, styles.blueBox]}>
          <Text style={styles.textStyle}>Card 3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  sideBar: {
    width: 80,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    flex: 1,
    padding: 10,
    gap: 10,
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  greenBox: {
    backgroundColor: "green",
  },
  yellowBox: {
    backgroundColor: "orange",
  },
  blueBox: {
    backgroundColor: "blue",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
  },
  sidebarText: {
    color: "black",
    fontWeight: "bold",
    transform: [{ rotate: "-90deg" }],
  },
});