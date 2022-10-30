import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Bird} from '../lib/types';
import CardBird from './CardBird';
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
    {
      id: '7',
      image: null,
      name: 'Grey seedeater',
    },
    {
      id: '8',
      image: null,
      name: 'Black-throated flowerpiercer',
    },
    {
      id: '9',
      image: null,
      name: 'Black-headed hemispingus',
    },
  ];

  return (
    <View style={styles.container}>
      <Title title="Next birds to discover!" />

      <FlatList
        style={styles.cardsContainer}
        columnWrapperStyle={styles.spaceBetween}
        data={data}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <CardBird
              id={item.id}
              name={item.name}
              variant="dark"
              img={item.image}
              isMasonry
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: '100%',
  },
  cardsContainer: {
    flex: 1,
    flexGrow: 0,
    minHeight: 342,
  },
  spaceCardMasonry: {
    width: '4%',
    backgroundColor: 'transparent',
  },
  spaceBetween: {justifyContent: 'space-between'},
});

export default NextToFind;
