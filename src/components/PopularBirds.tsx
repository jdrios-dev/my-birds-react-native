import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {colors} from '../lib/theme';
import {Bird} from '../lib/types';
import Title from './Title';

const PopularBirds = () => {
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

  type RenderItemProps = {
    item: Bird;
  };

  const renderItem = ({item}: RenderItemProps) => {
    return (
      <View style={styles.birdCardContainer} key={item.id}>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Title title="Popular in this zone" />

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: '100%',
    backgroundColor: colors.bgLigth,
  },
  birdCardContainer: {
    borderColor: colors.mainDark,
    borderWidth: 2,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 16,
    marginRight: 16,
    height: 170,
    width: 170,
  },
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});

export default PopularBirds;
