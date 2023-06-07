import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import {NativeBaseProvider} from 'native-base';
import {store} from './store';

const RootApp = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <App />
      </NativeBaseProvider>
    </Provider>
  );
};

export default RootApp;
