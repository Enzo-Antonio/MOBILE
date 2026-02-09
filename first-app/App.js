import { StyleSheet, Text, View, Image } from 'react-native'; // 1. Adicione Image aqui

export default function App() {
  return (
    <View style={styles.container}>
      {/* 2. Adicione a imagem abaixo */}
      <Image 
        source={require('./assets/spiderman 2099 wallpaper.png')} 
        style={styles.minhaImagem} 
      />
      
      <Text>Averiguando possível resenha</Text>

      <object
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // 3. Defina um tamanho, senão a imagem pode não aparecer
  minhaImagem: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});