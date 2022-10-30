import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../lib/theme';
import {Bird} from '../lib/types';
import Title from './Title';

const NextToFind = () => {
  const data: Bird[] = [
    {
      id: '1',
      image: null,
      name: 'Grey seedeater',
    },
    {
      id: '2',
      image: null,
      name: 'Black-throated flowerpiercer',
    },
    {
      id: '3',
      image: null,
      name: 'Black-headed hemispingus',
    },
    {
      id: '4',
      image: null,
      name: 'Grey seedeater',
    },
    {
      id: '5',
      image: null,
      name: 'Black-throated flowerpiercer',
    },
    {
      id: '6',
      image: null,
      name: 'Black-headed hemispingus',
    },
  ];

  type SpacingProps = {
    item: number;
  };

  const Spacing = ({item}: SpacingProps) => {
    if (item % 2 !== 0) {
      return null;
    }
    return <View style={styles.spaceCardMasonry} />;
  };

  return (
    <View style={styles.container}>
      <Title title="Next birds to find" />
      <View style={styles.cardsContainer}>
        {data.map((bird, index) => (
          <>
            <View style={styles.birdCardContainer} key={bird.id}>
              <Text>{bird.name}</Text>
            </View>
            <Spacing item={index} />
          </>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: '100%',
  },
  birdCardContainer: {
    borderColor: colors.mainDark,
    borderWidth: 2,
    backgroundColor: 'white',
    padding: 16,
    width: '48%',
    borderRadius: 16,
    marginBottom: 16,
    minHeight: 180,
  },
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  spaceCardMasonry: {
    width: '4%',
    backgroundColor: 'transparent',
  },
});

export default NextToFind;
