import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Pressable,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import CheckBox from '@react-native-community/checkbox';
import firestore from '@react-native-firebase/firestore';
import {GSTYLES, IMGS, ROUTES} from '../../constants';
import {RootStackParamList} from '../../navigations/RootNavigator';
import AuthHeader from '../../components/auth/AuthHeader';
import {useAppSelector} from '../../store/hooks';

type Props = NativeStackScreenProps<
  RootStackParamList,
  ROUTES.REGISTRATION_BIRTHDAY
>;

const RegistrationBirthday = ({navigation}: Props): JSX.Element => {
  const {userId} = useAppSelector(state => state.userReducer);
  const [toggleCheckBox, setToggleCheckBox] = React.useState<boolean>(false);
  const [dateOfBirth, setDateOfBirth] = React.useState<string>('');
  const [date, setDate] = React.useState<Date>(new Date());
  const [showPicker, setShowPicker] = React.useState<boolean>(false);

  const nextAction = () => {
    if (userId) {
      firestore().collection('users').doc(userId).update({
        birthday: dateOfBirth,
      });
      navigation.navigate(ROUTES.DRAWER);
    }
  };

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChangeDate = (
    {type}: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ) => {
    if (type === 'set') {
      const currentDate = selectedDate;

      if (currentDate) {
        setDate(currentDate);
        toggleDatePicker();
        setDateOfBirth(formatDate(currentDate));
      }
    } else {
      toggleDatePicker();
    }
  };

  const formatDate = (rawDate: Date) => {
    let dateData = new Date(rawDate);
    let year = dateData.getFullYear();
    let month = dateData.getMonth() + 1;
    let day = dateData.getDate();

    month = month < 10 ? Number(`0${month}`) : month;
    day = day < 10 ? Number(`0${day}`) : day;

    return `${day}.${month}.${year}`;
  };

  const isFieldsFilled = () => {
    if (toggleCheckBox && dateOfBirth.length > 0) {
      return true;
    }

    return false;
  };

  console.log(userId);

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
              Дата народження
            </Text>
            <Pressable onPress={toggleDatePicker}>
              <TextInput
                style={[GSTYLES.shadowProps, GSTYLES.text, styles.input]}
                value={dateOfBirth}
                onChangeText={setDateOfBirth}
                editable={false}
              />
            </Pressable>
            <View style={styles.acceptRulesContainer}>
              <View>
                <Text style={[GSTYLES.smallText]}>
                  Я погоджуюсь з правилами програми
                </Text>
                <View style={styles.underscore} />
              </View>
              <CheckBox
                tintColors={{
                  true: GSTYLES.colors.emerald,
                  false: GSTYLES.colors.black,
                }}
                value={toggleCheckBox}
                onValueChange={() => setToggleCheckBox(!toggleCheckBox)}
              />
            </View>
          </View>
          <TouchableOpacity
            disabled={!isFieldsFilled}
            onPress={nextAction}
            style={[
              GSTYLES.button,
              // eslint-disable-next-line react-native/no-inline-styles
              {opacity: isFieldsFilled() ? 1 : 0.5},
            ]}>
            <Text style={[GSTYLES.buttonLargeText, styles.buttonText]}>
              Далі
            </Text>
          </TouchableOpacity>

          {showPicker && (
            <View style={styles.datePicker}>
              <DateTimePicker
                value={date}
                display="spinner"
                mode={'date'}
                onChange={onChangeDate}
                maximumDate={new Date()}
                minimumDate={new Date('1900-1-1')}
              />
            </View>
          )}
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
    marginBottom: 105,
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
  acceptRulesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  underscore: {
    position: 'absolute',
    height: 1,
    left: 0,
    right: 0,
    backgroundColor: GSTYLES.colors.black,
    bottom: -7,
  },
  buttonText: {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  datePicker: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});

export default RegistrationBirthday;
