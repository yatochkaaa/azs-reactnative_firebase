import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Registration} from '../screens/index';
import {ROUTES} from '../constants';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.REGISTRATION} component={Registration} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
