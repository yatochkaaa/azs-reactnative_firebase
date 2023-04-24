import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {GSTYLES} from '../../constants';
import {IImage} from '../../types/types';

interface Props {
  item: IImage;
}

const {width} = Dimensions.get('screen');

const Carousel = ({item}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image resizeMode="stretch" style={styles.image} source={item.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 48,
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: GSTYLES.colors.white,
    borderRadius: 16,
  },
  image: {
    width: width - 48,
    borderRadius: 16,
  },
});

export default Carousel;
