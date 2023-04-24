import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d9d9d9',
      padding: 12,
    },

    titulo: {
      width: '100%',
      textAlign: 'center',
      fontWeight: 'bold',
    },

    inputCaption: {

    },

    inputBox: {
        backgroundColor: '#cccccc',
        height: 32,
        color: '#000000',
        padding: 16,
        borderRadius: 8,
        placeHolder: 'Vamos ver',
        fontSize: 8,
        placeholderTextColor: '#a7a5a6'
    },

    newUserButton: {
        width: '80%',
        backgroundColor: '#009900',
        marginTop: 20,
        borderRadius: 8,
        padding: 16,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center'
    },

  })