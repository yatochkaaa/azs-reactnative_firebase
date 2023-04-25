import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {GSTYLES, ICONS, IMGS, ROUTES} from '../../constants';
import {DrawerParamList} from '../../navigations/DrawerNavigator';
import Carousel from '../../components/Carousel/Carousel';
import GoogleMap from '../../components/GoogleMap';

type Props = DrawerScreenProps<DrawerParamList, ROUTES.MAIN_DRAWER>;

const Main = ({navigation}: Props): JSX.Element => {
  const openDrawer = () => navigation.openDrawer();

  return (
    <ImageBackground style={styles.background} source={IMGS.bg}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTES.NOTIFICATIONS_DRAWER)}>
            <Image source={ICONS.notificationIcon} />
          </TouchableOpacity>
          <Image source={IMGS.mainLogo} />
          <TouchableOpacity onPress={openDrawer}>
            <Image source={ICONS.menuIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.carousel}>
          <Carousel />
        </View>
        <View>
          <Text style={[GSTYLES.text, styles.sectionTitle]}>
            Слідкуй за знижками
          </Text>
          <TouchableOpacity style={[GSTYLES.shadowProps, styles.sectionButton]}>
            <Image style={styles.sectionIcon} source={ICONS.discountIcon} />
            <Text style={GSTYLES.text}>Отримати персональну знижку</Text>
          </TouchableOpacity>
          <View style={styles.split}>
            <TouchableOpacity
              style={[
                GSTYLES.shadowProps,
                styles.sectionButton,
                styles.splittedButton,
              ]}>
              <Image style={styles.sectionIcon} source={ICONS.couponIcon} />
              <Text style={GSTYLES.text}>Придбати{'\n'}пальне</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                GSTYLES.shadowProps,
                styles.sectionButton,
                styles.splittedButton,
              ]}>
              <Image style={styles.sectionIcon} source={ICONS.fuelIcon} />
              <Text style={GSTYLES.text}>Ціни на{'\n'}пальне</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={[GSTYLES.text, styles.sectionTitle]}>
            Паливна картка
          </Text>
          <TouchableOpacity style={[GSTYLES.shadowProps, styles.sectionButton]}>
            <Image style={styles.sectionIcon} source={ICONS.cardIcon} />
            <Text style={GSTYLES.largeText}>1205.80 грн</Text>
            <Image style={styles.barcode} source={IMGS.barcode} />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={[GSTYLES.text, styles.sectionTitle]}>Карта АЗК САН</Text>
          <View style={styles.googleMapContainer}>
            <GoogleMap />
          </View>
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
  carousel: {
    marginBottom: 18,
  },
  sectionTitle: {
    marginBottom: 18,
  },
  sectionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: GSTYLES.colors.white,
    borderRadius: 15,
    backgroundColor: GSTYLES.colors.white,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 18,
  },
  sectionIcon: {
    marginRight: 12,
  },
  split: {
    flexDirection: 'row',
    gap: 8,
  },
  splittedButton: {
    flex: 1,
  },
  barcode: {
    marginLeft: 20,
  },
  googleMapContainer: {
    borderRadius: 15,
    height: 118,
  },
});

export default Main;
