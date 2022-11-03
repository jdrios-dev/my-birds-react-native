import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {colors} from '../lib/theme';
import {Bird} from '../lib/types';
import CardBird from './CardBird';
import Title from './ui/Title';
import {data} from '../lib/data';

type RenderItemProps = {
  item: Bird;
};

const PopularBirds = () => {
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
      <View style={styles.titleContainer}>
        <Title title="Popular in this zone" />
      </View>

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
    paddingVertical: 16,
    marginBottom: 16,
    width: '100%',
    backgroundColor: colors.bgLigth,
  },
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  titleContainer: {
    marginHorizontal: 16,
  },
});

export default PopularBirds;
