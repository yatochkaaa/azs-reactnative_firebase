import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {GSTYLES, IMGS, ROUTES} from '../../constants';
import {RootStackParamList} from '../../navigations/RootNavigator';
import PhoneNumberInput from '../../components/auth/PhoneInputGroup';
import OTPInput from '../../components/auth/OTPInputGroup';
import {useAppDispatch} from '../../store/hooks';
import AuthHeader from '../../components/auth/AuthHeader';
import {setUserIdAction} from '../../store/action-creators/user';

type Props = NativeStackScreenProps<RootStackParamList, ROUTES.LOGIN>;

const Login = ({navigation}: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const [phone, setPhone] = React.useState<string>('');
  const [code, setCode] = React.useState<string>('');
  const [confirm, setConfirm] =
    React.useState<FirebaseAuthTypes.ConfirmationResult | null>(null);

  const sendConfirmation = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phone);
      setConfirm(confirmation);
    } catch (e) {
      Alert.alert('Невірно вказано номер телефону');
    }
  };

  const confirmCode = async (verificationCode: string) => {
    try {
      if (confirm) {
        await confirm.confirm(verificationCode);
        setConfirm(null);

        const user = auth().currentUser;
        if (user) {
          dispatch(setUserIdAction(user.uid));
          navigation.navigate(ROUTES.DRAWER);
        }
      }
    } catch (error) {
      Alert.alert('Невірно вказано код');
    }
  };

  const signInAndNavMain = () => {
    if (!confirm) {
      sendConfirmation();
    } else {
      confirmCode(code);
    }
  };

  return (
    <ImageBackground style={styles.background} source={IMGS.bg}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <AuthHeader
            toMain={() => navigation.navigate(ROUTES.DRAWER)}
            title={'Авторизація'}
          />
        </View>
        <View style={styles.main}>
          <View style={styles.phoneInputGroup}>
            <PhoneNumberInput phone={phone} setPhone={setPhone} />
          </View>

          <View style={styles.OTPInputGroup}>
            <OTPInput
              editable={confirm !== null}
              code={code}
              setCode={setCode}
            />
          </View>

          <TouchableOpacity onPress={signInAndNavMain} style={GSTYLES.button}>
            <Text style={[GSTYLES.buttonLargeText, styles.buttonText]}>
              Увійти
            </Text>
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
  headerContainer: {
    marginBottom: 38,
  },
  main: {
    alignItems: 'center',
  },
  phoneInputGroup: {
    width: '100%',
    marginBottom: 24,
  },
  OTPInputGroup: {
    width: '100%',
    marginBottom: 28,
  },
  buttonText: {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default Login;
