import React from 'react'
import { Provider } from 'react-redux'
import App from './App'
import { NativeBaseProvider } from 'native-base'

const RootApp = () => {
    return (
        <NativeBaseProvider>
            <App/>
        </NativeBaseProvider>
    )
}

export default RootApp;