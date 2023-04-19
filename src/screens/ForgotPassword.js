import React, {useState, useEffect} from "react";
import {StyleSheet, Image, ScrollView, TouchableOpacity} from "react-native"
import {Container, FormControl, Button, Text, Heading, Input, Item} from "native-base"

import Login from "../assets/login-image.jpg"
import { CurrentRenderContext } from "@react-navigation/native";


const ForgotPassword = ({navigator,}) => {

    // const dispatch = useDispatch()
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
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    return (
        <>
            <Container>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <Heading>Forgot Password</Heading> 
                <Image
                    source={Welcome}
                    style={{width: null, height: 150, marginTop: 30}}
                    resizeMode="contain"
                />
                <FormControl>
                    <Input
                        placeholder="Enter your registerd email"
                        value={email}
                        style={{color: '#000'}}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <Button block>
                        <Text>Forgot Password</Text>
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
    )
}

export default ForgotPassword;


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