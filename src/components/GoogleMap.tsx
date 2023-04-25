import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';
import {GSTYLES} from '../constants';

const GoogleMap = (): JSX.Element => {
  return (
    <View style={[GSTYLES.shadowProps, styles.container]}>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: 50.438937491602225,
          longitude: 30.52317371301241,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: GSTYLES.colors.white,
    borderRadius: 15,
    overflow: 'hidden',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default GoogleMap;
