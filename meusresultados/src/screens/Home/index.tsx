import { Text, View } from 'react-native';

import { styles } from './styles';

export function Home() {
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