import { StyleSheet, Text, View} from 'react-native';
import Lista01 from './jsx_exercises/lista-01';
import Lista02 from './jsx_exercises/lista-02';
import Lista03 from './jsx_exercises/lista-03';

export default function App() {
  return (
    <View style={styles.container}>
      <Lista03/>
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