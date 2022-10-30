import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {colors} from '../lib/theme';

type CardBirdProps = {
  id: string;
  name: string;
  variant: 'clear' | 'dark';
  img: string | null;
  isMasonry: boolean;
};

const CardBird = ({name, variant, img, id, isMasonry}: CardBirdProps) => {
  return (
    <View
      style={[
        styles.birdCardContainer,
        variant === 'dark' ? styles.bgDark : styles.bgClear,
        isMasonry ? styles.withMasonry : styles.withoutMasonry,
      ]}
      key={id}>
      <Image
        source={img || require('../assets/bird_placeholder.png')}
        style={styles.image}
      />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  birdCardContainer: {
    borderColor: colors.mainDark,
    borderWidth: 2,
    padding: 16,
    borderRadius: 16,
  },
  bgDark: {
    backgroundColor: colors.bgLigth,
  },
  bgClear: {
    backgroundColor: 'white',
  },
  withMasonry: {
    width: '48%',
    minHeight: 180,
    marginBottom: 16,
  },
  withoutMasonry: {
    height: 180,
    width: 180,
    marginRight: 16,
    marginBottom: 8,
  },
  image: {
    marginLeft: 'auto',
    marginRight: 20,
    marginTop: 20,
  },
  name: {
    fontSize: 20,
    marginTop: 'auto',
  },
});

export default CardBird;
