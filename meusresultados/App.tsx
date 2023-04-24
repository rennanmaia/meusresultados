import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#d9d9d9',
      padding: 12,
    }}>
      <Text style={{
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
      }}>
        Primeiro texto
      </Text>
      <Text style={{
        width: '100%',
        height: 100,
        backgroundColor: '#804000',
        color: '#ffffff',
      }}>
        Segundo texto
      </Text>
      <Text>Terceiro texto</Text>
    </View>
  );
}
