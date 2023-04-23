import React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';

const Login = (): JSX.Element => {
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
