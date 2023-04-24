import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GSTYLES, IMGS, ROUTES} from '../../constants';
import PhoneNumberInput from '../../components/PhoneNumberInput';
import {AuthStackParamList} from '../../navigations/RootNavigator';

type Props = NativeStackScreenProps<AuthStackParamList, ROUTES.REGISTRATION>;

const Registration = ({navigation}: Props): JSX.Element => {
  const [phoneInputText, setPhoneInputText] = React.useState<string>('');
  const [vereficationCode, setVereficationCode] = React.useState<string>('');

  return (
    <ImageBackground style={styles.background} source={IMGS.bg}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate(ROUTES.DRAWER)}>
          <Image source={IMGS.arrow} />
        </TouchableOpacity>
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

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Далі</Text>
          </TouchableOpacity>
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
    color: GSTYLES.colors.black,
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
    backgroundColor: GSTYLES.colors.white,
    borderRadius: 15,
    marginBottom: 28,
  },
  resentText: {
    textAlign: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: GSTYLES.colors.emerald,
    padding: 16,
    borderRadius: 15,
  },
  buttonText: {
    fontFamily: 'Intro',
    fontSize: 16,
    textAlign: 'center',
    color: GSTYLES.colors.white,
    textTransform: 'uppercase',
  },
});

export default Registration;
