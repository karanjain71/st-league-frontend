import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  Container,
  FormControl,
  Button,
  Text,
  Heading,
  Input,
  Item,
  Center,
} from 'native-base';

import Login from '../assets/login-image.jpg';
import {CurrentRenderContext} from '@react-navigation/native';

const StartScreen = ({navigation}) => {
  return (
    <>
      <Center flex={1} style={styles.container}>
        <Image source={Login} style={styles.image} resizeMode="cover"></Image>
        <TouchableOpacity
          style={[styles.buttons, {backgroundColor: '#0096FF'}]}
          onPress={() => navigation.navigate('Register')}>
          <Text>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttons, {backgroundColor: '#FFD32D'}]}
          block
          onPress={() => navigation.navigate('Login')}>
          <Text>Login</Text>
        </TouchableOpacity>
      </Center>
    </>
  );
};

export default StartScreen;

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
    marginBottom: 20,
  },
  image: {
    width: 500,
    height: 500,
  },
});
