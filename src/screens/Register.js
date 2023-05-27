import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import {
  Container,
  FormControl,
  Button,
  Text,
  Heading,
  Input,
  Box,
  Center,
} from 'native-base';

import Login from '../assets/login-image.jpg';
import {CurrentRenderContext} from '@react-navigation/native';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <>
      <Center flex={1} style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <Image source={Login} style={styles.image}></Image>
          <Heading mx="5">Please register to continue</Heading>
          <FormControl>
            <Box alignItems="center">
              <Input
                mt="4"
                mb="2"
                placeholder="Email"
                w="90%"
                value={email}
                style={[styles.input, {color: '#000'}]}
                onChangeText={text => setEmail(text)}
              />
            </Box>
            <Box alignItems="center">
              <Input
                placeholder="Password"
                w="90%"
                value={password}
                style={[styles.input, {color: '#000'}]}
                onChangeText={text => setPassword(text)}
              />
            </Box>
            <Box alignItems="center">
              <Input
                mt="4"
                mb="2"
                placeholder="Confirm Password"
                w="90%"
                value={confirmPassword}
                style={[styles.input, {color: '#000'}]}
                onChangeText={text => setConfirmPassword(text)}
              />
            </Box>
            <TouchableOpacity
              block
              style={[styles.buttons, {backgroundColor: '#0096FF'}]}>
              <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={{marginTop: 10}}>
              <Text style={{color: '#000', textAlign: 'center'}}>
                Already a member? Login here
              </Text>
            </TouchableOpacity>
          </FormControl>
        </ScrollView>
      </Center>
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    // backgroundImage: "../assets/login-page.jpg",
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'flex-start',
  },
  buttons: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 7,
    marginHorizontal: 15,
    marginVertical: 20,
  },
  input: {},
  image: {
    width: 400,
    height: 400,
  },
});
