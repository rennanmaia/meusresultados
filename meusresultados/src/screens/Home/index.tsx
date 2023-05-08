import { Text, View,  TextInput, TouchableOpacity } from 'react-native';

import { styles, Container } from './styles';

export function Home() {
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

    <Text style={styles.inputCaption}>
        Confirmação de senha
      </Text>
      <TextInput 
        style={styles.inputBox} 
        placeholder='Confirme sua senha'
      />

    <TouchableOpacity style={ styles.newUserButton }>
        <Text>
            Cadastrar
        </Text>
    </TouchableOpacity>

    </View>
  );
}