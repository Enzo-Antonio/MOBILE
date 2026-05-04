import { StyleSheet, Text, View } from "react-native";
import FormularioExemplo from "./text_input/formulario";
import FlatListExemplo from "./flat-list/flatList_example";


export default function App() {
  return (
    <View style={styles.container}>
      <FlatListExemplo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
