import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {GSTYLES, IMGS, ROUTES} from '../../constants';
import {Image, StyleSheet, Text, View} from 'react-native';

const CustomDrawerContent = (
  props: DrawerContentComponentProps,
): JSX.Element => {
  const logoutButton = () => {
    return (
      <View style={styles.logoutButton}>
        <Text style={[GSTYLES.menuText, styles.logoutText]}>Вийти</Text>
        <Image source={IMGS.menuArrow} />
      </View>
    );
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label={logoutButton}
        onPress={() => props.navigation.navigate(ROUTES.REGISTRATION)}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  logoutButton: {
    marginTop: 240,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutText: {
    marginRight: 14,
  },
});

export default CustomDrawerContent;
