import React from 'react';
import { View, StyleSheet, Image, TextInput } from 'react-native';

import logo from '../assets/logo.png';

export default function Login() {
  return (
    <View style={style.container}>
      <Image source={logo} />

      <TextInput
        placeholder="Digite seu usuário no Github"
        placeholderTextColor="#999"
        style={style.input}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginTop: 15,
    marginHorizontal: 15,
    paddingLeft: 15,
  },
});
