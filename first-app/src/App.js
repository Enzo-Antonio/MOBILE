import { StyleSheet, Text, View } from "react-native";
import Exercicio10 from "./flexbox_exercises-EnzoAntonioFerreiraDeAraujo/exercises_10";


export default function App() {
  return (
    <View style={styles.container}>
      <Exercicio10 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
