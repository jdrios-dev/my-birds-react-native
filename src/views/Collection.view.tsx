import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const CollectionView = () => {
  return (
    <View style={styles.container}>
      <Text>Collection</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
