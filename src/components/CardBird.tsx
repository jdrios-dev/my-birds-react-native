import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../lib/theme';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

type CardBirdProps = {
  id: string;
  name: string;
  variant: 'clear' | 'dark';
  img: string | null;
  isMasonry: boolean;
};

type RootBottomParam = {
  Detail: {id: string};
};

const CardBird = ({name, variant, img, id, isMasonry}: CardBirdProps) => {
  const navigation = useNavigation<BottomTabNavigationProp<RootBottomParam>>();

  const onPress = () => {
    navigation.navigate({
      name: 'Detail',
      params: {id},
    });
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.birdCardContainer,
          variant === 'dark' ? styles.bgDark : styles.bgClear,
          isMasonry ? styles.withMasonry : styles.withoutMasonry,
        ]}
        key={id}>
        {img ? (
          <Image source={{uri: img as string}} style={styles.withImage} />
        ) : (
          <Image
            source={require('../assets/bird_placeholder.png')}
            style={styles.image}
          />
        )}

        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  birdCardContainer: {
    borderColor: colors.mainDark,
    borderWidth: 2,

    borderRadius: 16,
  },
  bgDark: {
    backgroundColor: colors.bgLigth,
  },
  bgClear: {
    backgroundColor: 'white',
  },
  withMasonry: {
    width: 180,
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
  withImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderTopEndRadius: 14,
    borderTopStartRadius: 14,
  },
  name: {
    fontSize: 20,
    marginTop: 'auto',
    margin: 16,
  },
});

export default CardBird;
