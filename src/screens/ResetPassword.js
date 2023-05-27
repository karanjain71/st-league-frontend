import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import {
  Container,
  FormControl,
  Button,
  Text,
  Heading,
  Input,
  Item,
} from 'native-base';

import Login from '../assets/login-image.jpg';
import {CurrentRenderContext} from '@react-navigation/native';

const ResetPassword = ({navigator}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <>
      <Container>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <Heading>Reset Password</Heading>
          <Image
            source={Login}
            style={{width: null, height: 150, marginTop: 30}}
            resizeMode="contain"
          />
          <FormControl>
            <Input
              placeholder="Enter your new password"
              value={password}
              style={{color: '#eee'}}
              onChangeText={text => setPassword(text)}
            />
            <Input
              placeholder="Confirm your password"
              value={confirmPassword}
              style={{color: '#000'}}
              onChangeText={text => setConfirmPassword(text)}
            />
            <Button block>
              <Text>Reset Password</Text>
            </Button>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUp')}
              style={{marginTop: 10}}>
              <Text style={{color: '#000', textAlign: 'center'}}>
                Do not have an account, SignUp here
              </Text>
            </TouchableOpacity>
          </FormControl>
        </ScrollView>
      </Container>
    </>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b262c',
    flex: 1,
    justifyContent: 'flex-start',
  },
  heading: {
    textAlign: 'center',
    color: '#fdcb9e',
    marginHorizontal: 5,
    marginTop: 30,
  },
  formItem: {
    marginBottom: 20,
  },
});
