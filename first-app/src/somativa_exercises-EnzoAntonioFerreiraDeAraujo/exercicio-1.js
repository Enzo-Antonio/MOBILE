import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView07() {
  return (
  <View style={styles.container}>
    <View style={styles.header}>
        <View style={styles.yellowBox}><Text style={styles.textStyle}>Amarelo</Text></View>
        <View style={styles.blueBox}><Text style={styles.textStyle}>Azul</Text></View>
    </View>
    <View style={styles.body}>
        <View style={styles.leftRow}>
            <View style={styles.greenBox}><Text style={styles.textStyle}>Verde</Text></View>
        </View>
        <View style={styles.rightColumn}>
            <View style={styles.pinkBox}><Text style={styles.textStyle}>Rosa</Text></View>
            <View style={styles.orangeBox}><Text style={styles.textStyle}>Laranja</Text></View>
        </View>
    </View>
    <View style={styles.footer}>
        <View style={styles.redBox}><Text style={styles.textStyle}>Vermelho</Text></View>
        <View style={styles.cianBox}><Text style={styles.textStyle}>Teal</Text></View>
        <View style={styles.purpleBox}><Text style={styles.textStyle}>Roxo</Text></View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    gap: 8,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  header: {
    flexDirection: 'row',
    gap: 8,
  },
  body: {
    flexDirection: 'row',
    flex: 1,
    gap: 8,
  },
  leftRow: {
    flexDirection: 'row',
    flex: 0.5,
  },
  rightColumn: {
    flexDirection: 'column',
    flex: 0.5,
    gap: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  pinkBox: {
    height: 360,
    width: '100%',
    backgroundColor: "pink",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '2%',
  },
  greenBox: {
    height: 720,
    width: '100%',
    backgroundColor: "green",
    borderRadius: '2%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  yellowBox: {
    height: 80,
    width: '25%',
    backgroundColor: "yellow",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '2%',
  },
  blueBox: {
    height: 80,
    width: '73%',
    backgroundColor: "blue",
    borderRadius: '2%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orangeBox: {
    height: 350,
    width: '100%',
    backgroundColor: "orange",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '2%',
  },
  redBox: {
    height: 80,
    width: '32%',
    backgroundColor: "red",
    borderRadius: '2%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cianBox: {
    height: 80,
    width: '32%',
    backgroundColor: "cyan",
    borderRadius: '2%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    height: 80,
    width: '32%',
    backgroundColor: "purple",
    borderRadius: '2%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});