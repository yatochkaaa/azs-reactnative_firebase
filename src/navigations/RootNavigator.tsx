import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, RegistrationName, RegistrationPhone} from '../screens/index';
import {ROUTES} from '../constants';
import DrawerNavigator from './DrawerNavigator';
import RegistrationBirthday from '../screens/auth/RegistrationBirthday';

export type RootStackParamList = {
  [ROUTES.DRAWER]: undefined;
  [ROUTES.REGISTRATION_PHONE]: undefined;
  [ROUTES.REGISTRATION_NAME]: undefined;
  [ROUTES.REGISTRATION_BIRTHDAY]: undefined;
  [ROUTES.LOGIN]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.DRAWER} component={DrawerNavigator} />
      <Stack.Screen
        name={ROUTES.REGISTRATION_PHONE}
        component={RegistrationPhone}
      />
      <Stack.Screen
        name={ROUTES.REGISTRATION_NAME}
        component={RegistrationName}
      />
      <Stack.Screen
        name={ROUTES.REGISTRATION_BIRTHDAY}
        component={RegistrationBirthday}
      />
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
