import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {GSTYLES, IMGS, ROUTES} from '../../constants';
import {DrawerParamList} from '../../navigations/DrawerNavigator';
import DrawerHeader from '../../components/DrawerHeader';

type Props = DrawerScreenProps<DrawerParamList, ROUTES.PRICES_DRAWER>;

const Prices = ({route, navigation}: Props): JSX.Element => {
  return (
    <ImageBackground style={styles.background} source={IMGS.bg}>
      <DrawerHeader route={route} navigation={navigation} />
      <View style={styles.main}>
        <Text style={GSTYLES.largeText}>A-95: 47.50</Text>
        <Text style={GSTYLES.largeText}>A-92: 47.95</Text>
        <Text style={GSTYLES.largeText}>ДП: 47.50</Text>
        <Text style={GSTYLES.largeText}>Газ: 25.33</Text>
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
  },
});

export default Prices;
