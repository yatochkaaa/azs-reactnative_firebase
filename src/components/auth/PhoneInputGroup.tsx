import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  TextInput,
  Text,
} from 'react-native';
import {GSTYLES, IMGS} from '../../constants';
import {MaskedTextInput, mask as phoneMask} from 'react-native-mask-text';

interface Props {
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
}

const PhoneNumberInput: React.FC<Props> = ({phone, setPhone}) => {
  const inputRef = React.useRef<TextInput>(null);
  const mask = '+38(099) 999 9999';

  const inputLabel = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const clearInput = () => {
    setPhone('');
  };

  return (
    <View>
      <Text style={[GSTYLES.smallText, styles.inputTitle]}>
        Ваш номер телефону
      </Text>
      <View style={[GSTYLES.shadowProps, styles.inputContainer]}>
        <Pressable onPress={inputLabel}>
          <Image style={styles.flag} source={IMGS.ua} />
        </Pressable>
        <MaskedTextInput
          ref={inputRef}
          defaultValue={'380'}
          value={phone && phoneMask(phone, mask, 'custom')}
          onChangeText={setPhone}
          style={[GSTYLES.text, styles.input]}
          mask={mask}
          keyboardType="number-pad"
          autoFocus
        />
        {phone.length > 5 && (
          <Pressable style={styles.actionIcon} onPress={clearInput}>
            <Image source={IMGS.cross} />
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: GSTYLES.colors.white,
    borderRadius: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: GSTYLES.colors.white,
  },
  flag: {
    marginHorizontal: 12,
  },
  inputTitle: {
    marginBottom: 12,
  },
  input: {
    width: '75%',
  },
  actionIcon: {
    padding: 12,
  },
});

export default PhoneNumberInput;
