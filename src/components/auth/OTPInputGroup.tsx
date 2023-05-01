import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {GSTYLES} from '../../constants';

interface Props {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  editable: boolean;
}

const {width} = Dimensions.get('screen');
const pinCount = 4;

const OTPInput = ({code, setCode, editable}: Props) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{opacity: editable ? 1 : 0}}>
      <Text style={[GSTYLES.smallText, styles.inputTitle]}>
        Введіть код з SMS
      </Text>

      <OTPInputView
        style={styles.otpInput}
        codeInputFieldStyle={styles.underlineStyleBase}
        code={code}
        onCodeChanged={setCode}
        pinCount={pinCount}
        editable={editable}
        keyboardType="number-pad"
      />

      <TouchableOpacity style={styles.resentButton}>
        <Text style={GSTYLES.smallText}>Надіслати код повторно</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  otpInput: {
    height: 44,
    width: '100%',
    marginBottom: 28,
  },
  underlineStyleBase: {
    ...GSTYLES.shadowProps,
    ...GSTYLES.text,
    height: 44,
    width: (width - 64 - 36) / pinCount, // (screenWidth - containerPaddings - gap) / pinCount
    borderRadius: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: GSTYLES.colors.white,
    backgroundColor: GSTYLES.colors.white,
  },
  inputTitle: {
    marginBottom: 12,
  },
  resentButton: {
    alignItems: 'center',
  },
});

export default OTPInput;
