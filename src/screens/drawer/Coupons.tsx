import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {GSTYLES, IMGS, ROUTES} from '../../constants';
import {DrawerParamList} from '../../navigations/DrawerNavigator';
import DrawerHeader from '../../components/DrawerHeader';
import InaccessibleContent from '../../components/InaccessibleContent';
import {useAppSelector} from '../../store/hooks';

type Props = DrawerScreenProps<DrawerParamList, ROUTES.СOUPONS_DRAWER>;

const Main = ({route, navigation}: Props): JSX.Element => {
  const {userId} = useAppSelector(state => state.userReducer);

  return (
    <ImageBackground style={styles.background} source={IMGS.bg}>
      <DrawerHeader route={route} navigation={navigation} />
      {userId ? (
        <View style={styles.main}>
          <Text style={GSTYLES.text}>У вас відсутні талони</Text>
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
    alignItems: 'center',
  },
});

export default Main;
