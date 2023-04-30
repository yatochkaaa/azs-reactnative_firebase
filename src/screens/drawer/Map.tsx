import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {IMGS, ROUTES} from '../../constants';
import {DrawerParamList} from '../../navigations/DrawerNavigator';
import DrawerHeader from '../../components/DrawerHeader';
import GoogleMap from '../../components/GoogleMap';

type Props = DrawerScreenProps<DrawerParamList, ROUTES.MAP_DRAWER>;

const Map = ({route, navigation}: Props): JSX.Element => {
  return (
    <ImageBackground style={styles.background} source={IMGS.bg}>
      <DrawerHeader route={route} navigation={navigation} />
      <View style={styles.main}>
        <GoogleMap />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  main: {
    flex: 1,
  },
});

export default Map;
