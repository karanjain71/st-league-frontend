import React, {useEffect} from 'react'
import "react-native-gesture-handler"

import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

import Home from "./screens/Home"
import MyContests from "./screens/MyContests"
import Login from './screens/Login'
import ResetPassword from './screens/ResetPassword'
import ForgotPassword from './screens/ForgotPassword'
import Register from './screens/Register'
import StartScreen from './screens/StartScreen'
import Profile from './screens/Profile'
import MoreSettings from './screens/MoreSettings'
import Footer from './components/Footer'


const Stack = createStackNavigator()


function App() {

  const isAuthenticated = true
  
  return (

    <>
      <NavigationContainer>
        <Stack.Navigator>
          {isAuthenticated? (
            <>
              <Stack.Screen name="Home" component={Home}/>
              <Stack.Screen name="MyContests" component={MyContests}/>
              <Stack.Screen name="Profile" component={Profile}/>
              <Stack.Screen name="MoreSettings" component={MoreSettings}/>
              <Stack.Screen name="Footer" component={Footer}/>
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