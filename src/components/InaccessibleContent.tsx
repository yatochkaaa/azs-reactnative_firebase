import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {GSTYLES} from '../constants';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  toRegistration: () => void;
}

const {width} = Dimensions.get('screen');

const InaccessibleContent = ({toRegistration}: Props): JSX.Element => {
  return (
    <View style={[GSTYLES.shadowProps, styles.container]}>
      <Text style={[GSTYLES.largeText, styles.text]}>
        Зареєструйстесь для створення власного кабінету
      </Text>
      <TouchableOpacity
        onPress={toRegistration}
        style={[GSTYLES.button, styles.button]}>
        <Text style={[GSTYLES.buttonText, styles.buttonTitle]}>
          Зареєструватись
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 24,
    backgroundColor: GSTYLES.colors.white,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: GSTYLES.colors.white,
  },
  text: {
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    width: width - 48,
    borderRadius: 15,
  },
  buttonTitle: {
    textAlign: 'center',
    width: '100%',
  },
});

export default InaccessibleContent;
