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

  const signIn = async (phoneNumber: string) => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error: any) {
      Alert.alert('Invalid signIn');
    }
  };

  const confirmVerificationCode = async (verificationCode: string) => {
    try {
      if (confirm) {
        await confirm.confirm(verificationCode);
        setConfirm(null);
      }
    } catch (error) {
      Alert.alert('Invalid code');
    }
  };

  const nextAction = () => {
    if (!confirm) {
      signIn(phone);
    } else {
      confirmVerificationCode(code);
      auth().onAuthStateChanged(user => {
        if (user) {
          dispatch(setUserIdAction(user.uid));
          navigation.navigate(ROUTES.DRAWER);
        }
      });
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

          <TouchableOpacity onPress={nextAction} style={GSTYLES.button}>
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
