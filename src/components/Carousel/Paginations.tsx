import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IImage} from '../../types/types';
import {GSTYLES} from '../../constants';

interface Props {
  images: IImage[];
  index: number;
}

const Pagination = ({images, index}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      {images.map((image, i) => {
        return (
          <View
            key={image.id}
            style={[styles.dot, index === i && styles.dotActive]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 18,
    left: 18,
    flexDirection: 'row',
  },
  dot: {
    backgroundColor: GSTYLES.colors.black,
    opacity: 0.5,
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 8,
  },
  dotActive: {
    opacity: 1,
  },
});

export default Pagination;
