import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto1}>
        Primeiro texto
      </Text>
      <Text style={styles.texto2}>
        Segundo texto
      </Text>
      <Text>Terceiro texto</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9d9d9',
    padding: 12,
  },
  texto1: {
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  texto2 : {
    width: '100%',
    height: 100,
    backgroundColor: '#804000',
    color: '#ffffff',
  }
})