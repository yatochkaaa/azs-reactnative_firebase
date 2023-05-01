import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import firestore from '@react-native-firebase/firestore';
import {GSTYLES, IMGS, ROUTES} from '../../constants';
import {RootStackParamList} from '../../navigations/RootNavigator';
import AuthHeader from '../../components/auth/AuthHeader';
import {useAppSelector} from '../../store/hooks';

type Props = NativeStackScreenProps<
  RootStackParamList,
  ROUTES.REGISTRATION_NAME
>;

const RegistrationName = ({navigation}: Props): JSX.Element => {
  const {userId} = useAppSelector(state => state.userReducer);
  const [name, setName] = React.useState<string>('');
  const [surname, setSurname] = React.useState<string>('');

  const isFieldsFilled = () => {
    if (name.length > 2 && surname.length > 2) {
      return true;
    }

    return false;
  };

  const saveAndNavNext = () => {
    try {
      if (userId) {
        firestore().collection('users').doc(userId).update({
          name,
          surname,
        });
        navigation.navigate(ROUTES.REGISTRATION_BIRTHDAY);
      }
    } catch (e) {
      Alert.alert('Invalid name or surname');
    }
  };

  return (
    <ImageBackground style={styles.background} source={IMGS.bg}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <AuthHeader
            toMain={() => navigation.navigate(ROUTES.DRAWER)}
            title={'Процес реєстраціЇ'}
          />
        </View>
        <View style={styles.main}>
          <View style={styles.inputGroup}>
            <Text style={[GSTYLES.smallText, styles.inputTitle]}>
              Ваше ім’я
            </Text>
            <TextInput
              style={[GSTYLES.shadowProps, GSTYLES.text, styles.input]}
              value={name}
              onChangeText={setName}
              autoFocus
              maxLength={16}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={[GSTYLES.smallText, styles.inputTitle]}>
              Ваше прізвище
            </Text>
            <TextInput
              style={[GSTYLES.shadowProps, GSTYLES.text, styles.input]}
              value={surname}
              onChangeText={setSurname}
              maxLength={16}
            />
          </View>
          <TouchableOpacity
            disabled={!isFieldsFilled()}
            style={[
              GSTYLES.button,
              // eslint-disable-next-line react-native/no-inline-styles
              {opacity: isFieldsFilled() ? 1 : 0.5},
            ]}
            onPress={saveAndNavNext}>
            <Text style={[GSTYLES.buttonLargeText, styles.buttonText]}>
              Далі
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
  inputTitle: {
    marginBottom: 12,
  },
  inputGroup: {
    width: '100%',
  },
  input: {
    backgroundColor: GSTYLES.colors.white,
    padding: 12,
    marginBottom: 28,
    borderRadius: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: GSTYLES.colors.white,
  },
  buttonText: {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default RegistrationName;
