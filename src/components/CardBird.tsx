import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
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
  const {width} = useWindowDimensions();
  const cardWidth = (width - 16 * 2) / 2 - 8;
  const navigation = useNavigation<BottomTabNavigationProp<RootBottomParam>>();

  const onPress = () => {
    navigation.navigate({
      name: 'Detail',
      params: {id: id},
    });
  };
  return (
    <View style={isMasonry ? styles.marginBottom : null}>
      <TouchableOpacity
        onPress={onPress}
        style={isMasonry ? {width: cardWidth, height: cardWidth} : null}>
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

          <View style={styles.nameContainer}>
            <Text style={styles.name}>{name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
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
    width: '100%',
    minHeight: '100%',
    marginBottom: 2,
  },
  withoutMasonry: {
    height: 160,
    width: 160,
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
    borderRadius: 14,
  },
  name: {
    fontSize: 20,
    marginTop: 'auto',
    margin: 8,
  },
  nameContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '40%',
    borderBottomEndRadius: 14,
    borderBottomStartRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
  marginBottom: {
    marginBottom: 16,
  },
});

export default CardBird;
