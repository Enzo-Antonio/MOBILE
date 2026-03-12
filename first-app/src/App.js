import { StyleSheet, Text, View} from 'react-native';
import ViewScaffold from './basic_components/view_examples_01';

export default function App() {
  return (
    <View style={styles.container}>
      <ViewScaffold />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3ff4e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});