import { Text, View,  TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Meus resultados
      </Text>

      <Text style={styles.inputCaption}>
        E-mail
      </Text>

      <TextInput 
        style={styles.inputBox} 
        placeholder='Digite aqui o seu e-mail'
      />
      <Text style={styles.inputCaption}>
        Senha
      </Text>
      <TextInput 
        style={styles.inputBox} 
        placeholder='Digite sua senha'
      />

    <TouchableOpacity style={ styles.newUserButton }>
        <Text>
            Entrar
        </Text>
    </TouchableOpacity>

    </View>
  );
}