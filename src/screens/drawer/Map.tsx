import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {IMGS, ROUTES} from '../../constants';
import {DrawerParamList} from '../../navigations/DrawerNavigator';

type Props = DrawerScreenProps<DrawerParamList, ROUTES.MAP_DRAWER>;

const Map = ({route, navigation}: Props): JSX.Element => {
  return (
    <ImageBackground style={styles.background} source={IMGS.bg}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTES.MAIN_DRAWER)}>
          <Image source={IMGS.arrow} />
        </TouchableOpacity>
        <View style={styles.content}>
          <Text>{route.name}</Text>
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
  content: {
    padding: 24,
    alignItems: 'center',
  },
});

export default Map;
