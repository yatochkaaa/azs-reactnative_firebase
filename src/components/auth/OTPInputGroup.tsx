import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MaskedTextInput, mask as codeMask} from 'react-native-mask-text';
import {GSTYLES} from '../../constants';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  editable: boolean;
}

const OTPInput = ({code, setCode, editable}: Props) => {
  const mask = '999999';

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{opacity: editable ? 1 : 0}}>
      <Text style={[GSTYLES.smallText, styles.inputTitle]}>
        Введіть код з SMS
      </Text>

      <MaskedTextInput
        value={code && codeMask(code, mask, 'custom')}
        onChangeText={setCode}
        style={[GSTYLES.shadowProps, GSTYLES.text, styles.input]}
        mask={mask}
        keyboardType="number-pad"
        editable={editable}
      />

      <TouchableOpacity style={styles.resentButton}>
        <Text style={GSTYLES.smallText}>Надіслати код повторно</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: GSTYLES.colors.white,
    padding: 12,
    marginBottom: 28,
    textAlign: 'center',
    borderRadius: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: GSTYLES.colors.white,
  },
  inputTitle: {
    marginBottom: 12,
  },
  resentButton: {
    alignItems: 'center',
  },
});

export default OTPInput;
