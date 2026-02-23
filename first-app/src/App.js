import { StyleSheet, Text, View} from 'react-native';
import Exemplo01 from './jsx_examples/exemplo-01-estrutura';
import Exemplo02 from './jsx_examples/exemplo-02-estrutura';
import Exemplo03 from './jsx_examples/exemplo-03-condicionais';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo03></Exemplo03>
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