import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {GSTYLES, IMGS, ROUTES} from '../../constants';
import {DrawerParamList} from '../../navigations/DrawerNavigator';

type Props = DrawerScreenProps<DrawerParamList, ROUTES.MAIN_DRAWER>;

const Main = ({navigation}: Props): JSX.Element => {
  const openDrawer = () => navigation.openDrawer();

  return (
    <ImageBackground style={styles.background} source={IMGS.bg}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={openDrawer}>
            <Image source={IMGS.notifications} />
          </TouchableOpacity>
          <Image source={IMGS.mainLogo} />
          <TouchableOpacity onPress={openDrawer}>
            <Image source={IMGS.menu} />
          </TouchableOpacity>
        </View>
        <View style={[GSTYLES.shadowProps, styles.carouselContainer]}>
          <Image style={styles.carouselImage} source={IMGS.discount} />
        </View>
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
  carouselContainer: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: GSTYLES.colors.white,
    borderRadius: 16,
  },
  carouselImage: {
    width: '100%',
    borderRadius: 16,
  },
});

export default Main;
