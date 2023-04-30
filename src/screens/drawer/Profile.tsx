import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {GSTYLES, IMGS, ROUTES} from '../../constants';
import {DrawerParamList} from '../../navigations/DrawerNavigator';
import DrawerHeader from '../../components/DrawerHeader';
import InaccessibleContent from '../../components/InaccessibleContent';
import {useAppSelector} from '../../store/hooks';
import firestore from '@react-native-firebase/firestore';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

type Props = DrawerScreenProps<DrawerParamList, ROUTES.PROFILE_DRAWER>;

const Profile = ({route, navigation}: Props): JSX.Element => {
  const {userId} = useAppSelector(state => state.userReducer);
  const [user, setUser] = React.useState<FirebaseFirestoreTypes.DocumentData>();

  React.useEffect(() => {
    if (userId) {
      firestore()
        .collection('users')
        .doc(userId)
        .onSnapshot(documentSnapshot => {
          setUser(documentSnapshot.data());
        });
    }
  }, [userId]);

  return (
    <ImageBackground style={styles.background} source={IMGS.bg}>
      <DrawerHeader route={route} navigation={navigation} />
      {user ? (
        <View style={styles.main}>
          <Text style={GSTYLES.text}>Номер телефону: {user.phone}</Text>
          <Text style={GSTYLES.text}>Ваше ім’я: {user.name}</Text>
          <Text style={GSTYLES.text}>Ваше прізвище: {user.surname}</Text>
          <Text style={GSTYLES.text}>Дата народження: {user.birthday}</Text>
        </View>
      ) : (
        <InaccessibleContent
          toRegistration={() => navigation.navigate(ROUTES.REGISTRATION_PHONE)}
        />
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  main: {
    padding: 24,
  },
});

export default Profile;
