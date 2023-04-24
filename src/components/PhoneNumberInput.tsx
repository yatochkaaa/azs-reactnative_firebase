import React from 'react';
import {StyleSheet, View, Image, Pressable, TextInput} from 'react-native';
import {GSTYLES, IMGS} from '../constants';
import {MaskedTextInput, mask as phoneMask} from 'react-native-mask-text';

interface Props {
  phoneInputText: string;
  setPhoneInputText: React.Dispatch<React.SetStateAction<string>>;
}

const PhoneNumberInput: React.FC<Props> = ({
  phoneInputText,
  setPhoneInputText,
}) => {
  const inputRef = React.useRef<TextInput>(null);
  const mask = '+38(099) 999 9999';

  const inputLabel = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const clearInput = () => {
    setPhoneInputText('');
  };

  return (
    <View style={[GSTYLES.shadowProps, styles.container]}>
      <Pressable onPress={inputLabel}>
        <Image style={styles.flag} source={IMGS.ua} />
      </Pressable>
      <MaskedTextInput
        ref={inputRef}
        defaultValue={'380'}
        value={phoneInputText && phoneMask(phoneInputText, mask, 'custom')}
        onChangeText={setPhoneInputText}
        style={[styles.input]}
        mask={mask}
        keyboardType="number-pad"
        autoFocus
      />
      {phoneInputText.length > 5 && (
        <Pressable style={styles.actionIcon} onPress={clearInput}>
          <Image source={IMGS.cross} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: GSTYLES.colors.white,
    borderRadius: 15,
  },
  flag: {
    marginHorizontal: 12,
  },
  input: {
    width: '75%',
    fontFamily: 'MusticaPro-SemiBold',
    fontSize: 14,
    color: GSTYLES.colors.black,
  },
  textContainer: {
    backgroundColor: GSTYLES.colors.white,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  actionIcon: {
    padding: 12,
  },
});

export default PhoneNumberInput;
