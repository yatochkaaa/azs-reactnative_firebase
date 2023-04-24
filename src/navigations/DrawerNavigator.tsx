import React from 'react';
import {Image, ImageSourcePropType, StyleSheet} from 'react-native';
import {
  DrawerContentComponentProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {GSTYLES, IMGS, ROUTES} from '../constants';
import {
  Coupons,
  Prices,
  Discounts,
  Map,
  CustomDrawerContent,
  Profile,
  Main,
  Notifications,
} from '../screens';

export type DrawerParamList = {
  [ROUTES.MAIN_DRAWER]: undefined;
  [ROUTES.NOTIFICATIONS_DRAWER]: undefined;
  [ROUTES.PROFILE_DRAWER]: undefined;
  [ROUTES.СOUPONS_DRAWER]: undefined;
  [ROUTES.PRICES_DRAWER]: undefined;
  [ROUTES.DISCOUNTS_DRAWER]: undefined;
  [ROUTES.MAP_DRAWER]: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const menuIcon = (img: ImageSourcePropType) => {
  return <Image source={img} />;
};

const DrawerNavigator = (): JSX.Element => {
  return (
    <Drawer.Navigator
      initialRouteName={ROUTES.MAIN_DRAWER}
      drawerContent={(props: DrawerContentComponentProps) =>
        CustomDrawerContent(props)
      }
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerActiveTintColor: GSTYLES.colors.emerald,
        drawerLabelStyle: styles.menuText,
        drawerStyle: styles.drawer,
      }}>
      <Drawer.Screen
        options={{drawerItemStyle: {display: 'none'}}}
        name={ROUTES.MAIN_DRAWER}
        component={Main}
      />
      <Drawer.Screen
        options={{drawerItemStyle: {display: 'none'}}}
        name={ROUTES.NOTIFICATIONS_DRAWER}
        component={Notifications}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => menuIcon(IMGS.menuProfile),
        }}
        name={ROUTES.PROFILE_DRAWER}
        component={Profile}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => menuIcon(IMGS.menuCoupons),
        }}
        name={ROUTES.СOUPONS_DRAWER}
        component={Coupons}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => menuIcon(IMGS.menuPrices),
        }}
        name={ROUTES.PRICES_DRAWER}
        component={Prices}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => menuIcon(IMGS.menuDiscounts),
        }}
        name={ROUTES.DISCOUNTS_DRAWER}
        component={Discounts}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => menuIcon(IMGS.menuMap),
        }}
        name={ROUTES.MAP_DRAWER}
        component={Map}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawer: {
    paddingTop: 100,
    paddingLeft: 12,
    backgroundColor: GSTYLES.colors.emerald,
  },
  menuText: {
    fontFamily: GSTYLES.fontFamily.MusticaPro,
    fontSize: 18,
    color: GSTYLES.colors.white,
  },
});

export default DrawerNavigator;
