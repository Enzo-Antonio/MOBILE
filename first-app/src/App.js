import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/stack_navigation_examples";


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
