import React, {useEffect} from 'react'
import "react-native-gesture-handler"

import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

import Home from "./screens/Home"
import Login from './screens/Login'
import ResetPassword from './screens/ResetPassword'
import ForgotPassword from './screens/ForgotPassword'
import Register from './screens/Register'
import StartScreen from './screens/StartScreen'


const Stack = createStackNavigator()


function App() {

  const isAuthenticated = false
  
  return (

    <>
      <NavigationContainer>
        <Stack.Navigator>
          {isAuthenticated? (
            <>
              <Stack.Screen name="Home" component={Home}/>
            </>
          ) : (
            <>
              <Stack.Screen name="Stock League" component={StartScreen}/>
              <Stack.Screen name="Login" component={Login}/>
              <Stack.Screen name="Register" component={Register}/>
              <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
              <Stack.Screen name="ResetPassword" component={ResetPassword}/>
            </>
          )
            }
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App