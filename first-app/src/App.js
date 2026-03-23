import { StyleSheet, Text, View } from "react-native";
import ExercicioView01 from "./flexbox_exercises-EnzoAntonioFerreiraDeAraujo/exercises_1-2";
import ExercicioView02 from "./flexbox_exercises-EnzoAntonioFerreiraDeAraujo/exercises_3-4";
import ExercicioView03 from "./flexbox_exercises-EnzoAntonioFerreiraDeAraujo/exercises_5";
import ExercicioView04 from "./flexbox_exercises-EnzoAntonioFerreiraDeAraujo/exercises_6";
import ExercicioView05 from "./flexbox_exercises-EnzoAntonioFerreiraDeAraujo/exercises_7";
import ExercicioView06 from "./flexbox_exercises-EnzoAntonioFerreiraDeAraujo/exercises_8";


export default function App() {
  return (
    <View style={styles.container}>
      <ExercicioView06 />
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
