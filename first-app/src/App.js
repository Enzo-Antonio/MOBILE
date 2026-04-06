import { StyleSheet, Text, View } from "react-native";
import PropsExercise1 from "./props_exercises - EnzoAntonioFerreiraDeAraujo/exercicio-1"
import PropsExercise2 from "./props_exercises - EnzoAntonioFerreiraDeAraujo/exercicio-2";
import PropsExercise3 from "./props_exercises - EnzoAntonioFerreiraDeAraujo/exercicio-3";
import PropsExercise4 from "./props_exercises - EnzoAntonioFerreiraDeAraujo/exercicio-4";
import Botao from "./props_exercises - EnzoAntonioFerreiraDeAraujo/desafio";

export default function App() {
  return (
    <View style={styles.container}>
      <Botao />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
