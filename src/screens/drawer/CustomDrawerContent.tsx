import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';
import {clearUserStateAction} from '../../store/action-creators/user';
import {GSTYLES, IMGS, ROUTES} from '../../constants';
import {useAppDispatch, useAppSelector} from '../../store/hooks';

const CustomDrawerContent = (
  props: DrawerContentComponentProps,
): JSX.Element => {
  const dispatch = useAppDispatch();
  const {userId} = useAppSelector(state => state.userReducer);

  const logOut = () => {
    props.navigation.closeDrawer();
    auth().signOut();
    dispatch(clearUserStateAction());
    props.navigation.navigate(ROUTES.DRAWER);
  };

  const authButton = (title: string) => (
    <View style={styles.logoutButton}>
      <Text style={[GSTYLES.menuText, styles.authText]}>{title}</Text>
      <Image source={IMGS.menuArrow} />
    </View>
  );

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.listContainer}>
        <DrawerItemList {...props} />
      </View>
      {userId ? (
        <DrawerItem label={() => authButton('Вийти')} onPress={logOut} />
      ) : (
        <>
          <DrawerItem
            label={() => authButton('Увійти')}
            onPress={() => {
              props.navigation.closeDrawer();
              props.navigation.navigate(ROUTES.LOGIN);
            }}
          />
          <DrawerItem
            label={() => authButton('Реєстрація')}
            onPress={() => {
              props.navigation.closeDrawer();
              props.navigation.navigate(ROUTES.REGISTRATION_PHONE);
            }}
          />
        </>
      )}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginBottom: 160,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authText: {
    marginRight: 14,
  },
});

export default CustomDrawerContent;
