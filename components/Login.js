import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {colors} from './constants';

const Login = ({handleLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        textContentType={'username'}
        style={styles.input}
        placeholder={'Username'}
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        textContentType={'password'}
        secureTextEntry={true}
        style={styles.input}
        placeholder={'Password'}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button
        title="Login"
        style={styles.btn}
        onPress={e => handleLogin(username, password)}
        color={colors.orange}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  btn: {
    marginTop: 20,
    backgroundColor: colors.orange,
    padding: 8,
    fontSize: 16,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Login;
