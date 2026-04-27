import { StyleSheet, Text, View } from "react-native";
import Exercicio10 from "./flexbox_exercises-EnzoAntonioFerreiraDeAraujo/exercises_10";
import ContadorExample from "./hooks/examples/useState_example";
import TelaLogin from "./hooks/examples/useRef_example";
import TelaMoeda from "./hooks/examples/useEffect_example";


export default function App() {
  return (
    <View style={styles.container}>
      <TelaMoeda/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
