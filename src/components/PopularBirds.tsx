import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {colors} from '../lib/theme';
import {Bird} from '../lib/types';
import CardBird from './CardBird';
import Title from './ui/Title';
import {data} from '../lib/data';

const PopularBirds = () => {
  type RenderItemProps = {
    item: Bird;
  };

  const renderItem = ({item}: RenderItemProps) => {
    return (
      <CardBird
        id={item.id}
        name={item.name}
        variant="clear"
        img={item.image}
        isMasonry={false}
      />
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
