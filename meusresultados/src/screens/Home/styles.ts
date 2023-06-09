import { StyleSheet } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #d9d9d9;
  padding: 12px;
`;

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
        fontSize: 12,
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