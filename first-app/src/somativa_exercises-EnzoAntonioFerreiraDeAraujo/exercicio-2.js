import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView08() {
  return (
  <View style={styles.container}>
    <View style={styles.header}>
        <View style={styles.grayBox}><Text style={styles.textStyle}>Header</Text></View>
    </View>
    <View style={styles.body}>
            <View style={styles.sideBox}><Text style={styles.textStyle}>Side</Text></View>
        <View style={styles.main}>
            <View style={styles.secaoSuperior}>
                <View style={styles.greenBox}><Text style={styles.textStyle}>Verde</Text></View>
                <View style={styles.blueBox}><Text style={styles.textStyle}>Azul</Text></View>
            </View>
            <View style={styles.circle}></View>
            <View style={styles.secaoInferior}>
                <View style={styles.redBox}><Text style={styles.textStyle}>Vermelho</Text></View>
                <View style={styles.orangeBox}><Text style={styles.textStyle}>Laranja</Text></View>
                <View style={styles.purpleBox}><Text style={styles.textStyle}>Roxo</Text></View>
            </View>
        </View>
    </View>
    <View style={styles.footer}>
        <View style={styles.blackBox}><Text style={styles.textStyle}>Footer</Text></View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 8,
    gap: 8,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  header: {
    flexDirection: 'row',
  },
  body: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
  },
  footer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  grayBox: {
    height: 80,
    width: '100%',
    backgroundColor: "#2c3e50",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '2%',
  },
  sideBox: {
    height: 750,
    width: 80,
    backgroundColor: "#95a5a6",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '2%',
  },
  main: {
    flexDirection: 'column',
    flex: 1,
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secaoSuperior: {
    flexDirection: 'row',
    flex: 1,
    gap: 8,
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25, 
    backgroundColor: '#34495e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secaoInferior: {
    flexDirection: 'row',
    flex: 1,
    gap: 8,
  },
  greenBox: {
    height: 350,
    width: 150,
    backgroundColor: "green",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '2%',
  },
  yellowBox: {
    backgroundColor: "yellow",
  },
  blueBox: {
    height: 350,
    width: 150,
    backgroundColor: "blue",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '2%',
  },
  orangeBox: {
    width: 145,
    backgroundColor: "orange",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '2%',
  },
  redBox: {
    width: 70,
    backgroundColor: "red",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '2%',
  },
  cianBox: {
    backgroundColor: "cyan",
  },
  purpleBox: {
    width: 70,
    backgroundColor: "purple",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '2%',
  },
  blackBox: {
    height: 80,
    width: '100%',
    backgroundColor: "black",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '2%',
  },
});