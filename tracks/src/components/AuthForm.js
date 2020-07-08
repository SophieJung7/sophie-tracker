import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';

const AuthForm = ({ bgText, btnTitle, onSubmit, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Spacer>
        <Text h3>{bgText}</Text>
      </Spacer>
      <Input
        label='Email'
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Input
        label='Password'
        value={password}
        onChangeText={setPassword}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={true}
      />
      {error ? <Text style={styles.errorMessage}>{error}</Text> : null}
      <Button
        onPress={() => onSubmit({ email, password })}
        style={styles.button}
        title={btnTitle}
      />
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    marginLeft: 15,
    marginVertical: 15,
    fontSize: 16,
    color: 'red',
  },
});

export default AuthForm;
