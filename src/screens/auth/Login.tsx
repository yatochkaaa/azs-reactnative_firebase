import React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigations/RootNavigator';
import {ROUTES} from '../../constants';

type Props = NativeStackScreenProps<AuthStackParamList, ROUTES.LOGIN>;

const Login = ({}: Props): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Login</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  text: {
    fontFamily: 'MusticaPro',
  },
});

export default Login;
