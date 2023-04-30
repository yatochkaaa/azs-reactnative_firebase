import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {GSTYLES, IMGS, ROUTES} from '../../constants';
import {DrawerParamList} from '../../navigations/DrawerNavigator';
import DrawerHeader from '../../components/DrawerHeader';

type Props = DrawerScreenProps<DrawerParamList, ROUTES.DISCOUNTS_DRAWER>;

const Discounts = ({route, navigation}: Props): JSX.Element => {
  return (
    <ImageBackground style={styles.background} source={IMGS.bg}>
      <DrawerHeader route={route} navigation={navigation} />
      <View style={styles.main}>
        <Text style={GSTYLES.largeText}>Отримати знижку 10%</Text>
      </View>
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

export default Discounts;
