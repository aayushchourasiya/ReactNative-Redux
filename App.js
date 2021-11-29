/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './Components/HomeScreen';
import {Provider} from 'react-redux';
import {store , persistor} from './States/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <HomeScreen />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
