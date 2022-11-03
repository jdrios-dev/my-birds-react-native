import React from 'react';
import {View, StyleSheet} from 'react-native';

const Map = () => {
  return (
    <View>
      <View style={styles.mapContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    width: '100%',
    height: 270,
    backgroundColor: 'limegreen',
  },
});

export default Map;
