import React, {useState, useEffect} from "react";
import {StyleSheet, Image, ScrollView, TouchableOpacity} from "react-native"
import {Container, FormControl, Button, Text, Heading, Input, Item, Center, Box} from "native-base"

import LoginImage from "../assets/login-image.jpg"
import { CurrentRenderContext } from "@react-navigation/native";
import { postLogin } from "../helpers/backend_helper";

const Login = ({navigation,}) => {

    const [email, setEmail] = useState("karanjain71@gmail.com")
    const [password, setPassword] = useState("aditi")

    const loginSubmit = async () => {
        const response = await postLogin(email, password)
    }
    
    return (
        <>
            <Center flex={1} style={styles.container}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <Image source={LoginImage} style={styles.image}></Image>
                <Heading mx="5">Please login to continue</Heading> 
                <FormControl>
                    <Box alignItems="center">
                        <Input 
                            mt="4"
                            mb="2"
                            placeholder="Email" 
                            w="90%"
                            value={email}
                            style={[styles.input, {color: '#000'}]}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </Box>;
                    <Box alignItems="center">
                        <Input 
                            placeholder="Password" 
                            w="90%"
                            value={password}
                            style={[styles.input, {color: '#000'}]}
                            onChangeText={(text) => setPassword(text)}
                        />
                    </Box>;
                    <TouchableOpacity block style={[styles.buttons, {backgroundColor:"#0096FF"}]} onPress={() => loginSubmit()}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Register')}
                        style={{marginTop: 10}}>
                        <Text style={{color: '#000', textAlign: 'center'}}>
                            Don't have an account? Register here
                        </Text>
                    </TouchableOpacity>
                </FormControl> 
            </ScrollView>

            </Center>
        </>
    )
}

export default Login;


const styles = StyleSheet.create({
    container: {
        // backgroundImage: "../assets/login-page.jpg",
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'flex-start',
    },
    buttons: {
        alignSelf: "stretch",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 7,
        marginHorizontal: 15,
        marginVertical: 20
    },
    input: {
    },
    image: {
        width: 400,
        height: 400
    }
  });