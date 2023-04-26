import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {DrawerParamList} from '../navigations/DrawerNavigator';
import {GSTYLES, ICONS, IMGS, ROUTES} from '../constants';

type Props = DrawerScreenProps<DrawerParamList>;

const DrawerScreenHeader = ({route, navigation}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate(ROUTES.MAIN_DRAWER)}>
        <Image source={IMGS.arrow} />
      </TouchableOpacity>
      <Text style={GSTYLES.largeText}>{route.name}</Text>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image source={ICONS.menuIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 51,
    paddingBottom: 40,
    paddingHorizontal: 24,
  },
});

export default DrawerScreenHeader;
