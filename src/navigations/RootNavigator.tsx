import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Registration} from '../screens/index';
import {ROUTES} from '../constants';
import DrawerNavigator from './DrawerNavigator';

export type RootStackParamList = {
  Drawer: undefined;
  Registration: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.DRAWER} component={DrawerNavigator} />
      <Stack.Screen name={ROUTES.REGISTRATION} component={Registration} />
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
