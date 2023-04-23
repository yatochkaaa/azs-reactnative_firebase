import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
  TextInput,
} from 'react-native';
import {GSTYLES, IMGS} from '../../constants';
import PhoneNumberInput from '../../components/PhoneNumberInput';

const Registration = (): JSX.Element => {
  const [phoneInputText, setPhoneInputText] = React.useState<string>('');
  const [vereficationCode, setVereficationCode] = React.useState<string>('');

  return (
    <ImageBackground style={styles.background} source={IMGS.bg}>
      <View style={styles.container}>
        <Image source={IMGS.arrow} />
        <View style={styles.content}>
          <Image style={styles.logo} source={IMGS.logo} />
          <Text style={styles.title}>Процес реєстраціЇ</Text>
          <View style={styles.phoneInputGroup}>
            <Text style={[GSTYLES.smallText, styles.inputTitle]}>
              Ваш номер телефону
            </Text>
            <PhoneNumberInput
              phoneInputText={phoneInputText}
              setPhoneInputText={setPhoneInputText}
            />
          </View>

          <View style={styles.verificationInputGroup}>
            <Text style={[GSTYLES.smallText, styles.inputTitle]}>
              Введіть код з SMS
            </Text>
            <TextInput
              style={[GSTYLES.shadowProps, styles.vereficationInput]}
              value={vereficationCode}
              onChangeText={setVereficationCode}
            />

            <Text style={[GSTYLES.smallText, styles.resentText]}>
              Надіслати код повторно
            </Text>
          </View>

          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Далі</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 32,
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    marginBottom: 38,
  },
  title: {
    fontFamily: 'Intro',
    fontSize: 16,
    color: GSTYLES.textBlack,
    textTransform: 'uppercase',
    marginBottom: 38,
  },
  phoneInputGroup: {
    width: '100%',
    marginBottom: 24,
  },
  verificationInputGroup: {
    width: '100%',
    marginBottom: 28,
  },
  inputTitle: {
    marginBottom: 12,
  },
  vereficationInput: {
    backgroundColor: GSTYLES.white,
    borderRadius: 15,
    marginBottom: 28,
  },
  resentText: {
    textAlign: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: GSTYLES.emerald,
    padding: 16,
    borderRadius: 15,
  },
  buttonText: {
    fontFamily: 'Intro',
    fontSize: 16,
    textAlign: 'center',
    color: GSTYLES.white,
    textTransform: 'uppercase',
  },
});

export default Registration;
