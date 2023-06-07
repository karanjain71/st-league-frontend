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

import LoginImage from '../assets/login-image.jpg';
import {CurrentRenderContext} from '@react-navigation/native';
import {forgotPasswordAction} from '../store/auth/authSlice';
import {useDispatch} from 'react-redux';

const ForgotPassword = ({navigator}) => {
  const dispatch = useDispatch();
  // const postState = useSelector((state) => state.post)
  // const userState = useSelector((state) => state.auth)
  // console.log(postState,'poststate')
  // console.log(userState,'userState')
  // console.log(postState.loading, 'loading')
  // useEffect(() => {
  //     dispatch(getPosts())
  // }, [])

  // if(postState.loading){
  //     return <EmptyContainer/>
  // }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const forgotPassword = async () => {
    const payload = {
      username: email,
    };
    dispatch(forgotPasswordAction(payload));
  };

  return (
    <>
      <Center flex={1} style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <Image source={LoginImage} style={styles.image}></Image>
          <Heading mx="5">Forgot Password</Heading>
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
            ;
            <TouchableOpacity
              block
              style={[styles.buttons, {backgroundColor: '#0096FF'}]}
              onPress={() => forgotPassword()}>
              <Text>Forgot Password</Text>
            </TouchableOpacity>
          </FormControl>
        </ScrollView>
      </Center>
    </>
  );
};

export default ForgotPassword;

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
