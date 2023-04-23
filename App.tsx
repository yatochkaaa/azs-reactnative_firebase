import 'react-native-gesture-handler';
import React from 'react';
import AuthNavigator from './src/navigations/AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;
