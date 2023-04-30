import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {GSTYLES, IMGS} from '../../constants';

interface Props {
  toMain: () => void;
  title: string;
}

const AuthHeader = ({toMain, title}: Props): JSX.Element => {
  return (
    <View>
      <TouchableOpacity onPress={toMain}>
        <Image source={IMGS.arrow} />
      </TouchableOpacity>
      <View style={styles.content}>
        <Image style={styles.logo} source={IMGS.logo} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
  },
  logo: {
    marginBottom: 38,
  },
  title: {
    fontFamily: 'Intro',
    fontSize: 16,
    color: GSTYLES.colors.black,
    textTransform: 'uppercase',
  },
});

export default AuthHeader;
