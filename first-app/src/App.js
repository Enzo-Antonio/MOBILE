import { StyleSheet, Text, View } from "react-native";
import ExercicioView07 from "./somativa_exercises-EnzoAntonioFerreiraDeAraujo/exercicio-1";
import ExercicioView08 from "./somativa_exercises-EnzoAntonioFerreiraDeAraujo/exercicio-2";


export default function App() {
  return (
    <View style={styles.container}>
      <ExercicioView08 />
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
