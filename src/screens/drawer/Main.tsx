import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {IMGS, ROUTES} from '../../constants';
import {DrawerParamList} from '../../navigations/DrawerNavigator';
import Carousel from '../../components/Carousel/Carousel';

type Props = DrawerScreenProps<DrawerParamList, ROUTES.MAIN_DRAWER>;

const Main = ({navigation}: Props): JSX.Element => {
  const openDrawer = () => navigation.openDrawer();

  return (
    <ImageBackground style={styles.background} source={IMGS.bg}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTES.NOTIFICATIONS_DRAWER)}>
            <Image source={IMGS.notifications} />
          </TouchableOpacity>
          <Image source={IMGS.mainLogo} />
          <TouchableOpacity onPress={openDrawer}>
            <Image source={IMGS.menu} />
          </TouchableOpacity>
        </View>
        <Carousel />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
});

export default Main;
