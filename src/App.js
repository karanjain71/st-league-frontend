import React, {useEffect} from 'react'
import "react-native-gesture-handler"

import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

import Home from "./screens/Home"


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
            </>
          ) : null
            }
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App