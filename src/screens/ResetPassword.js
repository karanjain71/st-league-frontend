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
  Center,
  Box,
} from 'native-base';

import Login from '../assets/login-image.jpg';
import {CurrentRenderContext} from '@react-navigation/native';
import {resetPasswordAction} from '../store/auth/authSlice';
import {useDispatch} from 'react-redux';

const ResetPassword = ({navigator}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();

  const resetPassword = () => {
    dispatch(
      resetPasswordAction({
        password,
      }),
    );
  };

  return (
    <>
      <Center flex={1} style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <Image source={Login} style={styles.image}></Image>
          <Heading mx="5">Please reset your password</Heading>
          <FormControl>
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
              style={[styles.buttons, {backgroundColor: '#0096FF'}]}
              onPress={() => resetPassword()}>
              <Text>Reset Password</Text>
            </TouchableOpacity>
          </FormControl>
        </ScrollView>
      </Center>
    </>
  );
};

export default ResetPassword;

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
