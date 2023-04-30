import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {GSTYLES, IMGS, ROUTES} from '../../constants';
import {DrawerParamList} from '../../navigations/DrawerNavigator';
import DrawerHeader from '../../components/DrawerHeader';
import {useAppSelector} from '../../store/hooks';
import InaccessibleContent from '../../components/InaccessibleContent';

type Props = DrawerScreenProps<DrawerParamList, ROUTES.NOTIFICATIONS_DRAWER>;

const Notifications = ({route, navigation}: Props): JSX.Element => {
  const {userId} = useAppSelector(state => state.userReducer);

  return (
    <ImageBackground style={styles.background} source={IMGS.bg}>
      <DrawerHeader route={route} navigation={navigation} />
      {userId ? (
        <View style={styles.main}>
          <Text style={GSTYLES.text}>У вас відсутні повідомлення</Text>
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

export default Notifications;
